import { Router, type IRouter, type Request, type Response } from "express";

const router: IRouter = Router();

interface CachedReviews {
  data: ReviewsPayload;
  fetchedAt: number;
}

interface ReviewsPayload {
  reviews: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
}

interface GoogleReview {
  authorName: string;
  rating: number;
  text?: string;
  relativePublishTimeDescription?: string;
}

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
let cache: CachedReviews | null = null;

async function fetchFromGoogle(placeId: string, apiKey: string): Promise<ReviewsPayload> {
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
  const response = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "reviews,rating,userRatingCount",
    },
  });

  if (!response.ok) {
    throw new Error(`Google Places API error: ${response.status} ${response.statusText}`);
  }

  const body = await response.json() as {
    reviews?: Array<{
      rating: number;
      relativePublishTimeDescription?: string;
      text?: { text?: string };
      authorAttribution?: { displayName?: string };
    }>;
    rating?: number;
    userRatingCount?: number;
  };

  const reviews: GoogleReview[] = (body.reviews ?? []).map((r) => ({
    authorName: r.authorAttribution?.displayName ?? "Anonymous",
    rating: r.rating,
    text: r.text?.text,
    relativePublishTimeDescription: r.relativePublishTimeDescription,
  }));

  return {
    reviews,
    rating: body.rating,
    userRatingCount: body.userRatingCount,
  };
}

router.get("/reviews", async (req: Request, res: Response) => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    req.log.warn("Google Places API not configured — GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are required");
    res.json({ reviews: [] });
    return;
  }

  const now = Date.now();
  if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    res.json(cache.data);
    return;
  }

  try {
    const data = await fetchFromGoogle(placeId, apiKey);
    cache = { data, fetchedAt: now };
    req.log.info({ reviewCount: data.reviews.length }, "Google Reviews fetched and cached");
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch Google Reviews");
    res.json(cache?.data ?? { reviews: [] });
  }
});

export default router;
