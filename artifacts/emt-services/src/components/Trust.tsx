import { motion } from "framer-motion";
import { Facebook, Instagram, Star, Loader2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useGetReviews } from "@workspace/api-client-react";

import djConcertImg from "@assets/PXL_20230701_213226230_1779997274809.jpg";
import festivalCrowdImg from "@assets/PXL_20250822_173135757_1779997274807.jpg";
import castleImg from "@assets/IMG_20260503_160246_1780012947272.jpg";
import fireworksImg from "@assets/PXL_20241108_194503905.RESTORED_1779997274806.jpg";
import bigTopImg from "@assets/leeds-festival_(1)_1779997274806.jpg";
import indoorVenueImg from "@assets/PXL_20251004_024016677_1779997274807.jpg";

const galleryImages = [
  { src: djConcertImg, alt: "Outdoor concert stage with DJ performing to a crowd", caption: "Camper Marmalade" },
  { src: festivalCrowdImg, alt: "Open-air festival crowd at a summer event", caption: "Open-Air Festival" },
  { src: castleImg, alt: "Herstmonceux Castle with moat on a sunny day — venue for an EMT Services event", caption: "Herstmonceux Castle" },
  { src: fireworksImg, alt: "Emergency ambulance on standby at a fireworks display", caption: "Fireworks Display" },
  { src: bigTopImg, alt: "Festival big-top tents at a summer music event", caption: "Summer Festival" },
  { src: indoorVenueImg, alt: "Indoor venue with stage lighting", caption: "Indoor Rave" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "fill-[#FBBC05] text-[#FBBC05]" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export default function Trust() {
  const { data: reviewsData, isLoading } = useGetReviews();

  return (
    <section id="trust" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Events We Have Covered</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            An honest cross-section of the work we do — from small community events to larger gatherings. We do not pick and choose what to show based on scale.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-20">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative group overflow-hidden rounded-xl aspect-video bg-muted"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.caption}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column — Google Reviews */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-foreground">Google Reviews</h3>
              {reviewsData?.rating && (
                <div className="flex items-center gap-2">
                  <StarRating rating={Math.round(reviewsData.rating)} />
                  <span className="text-sm text-muted-foreground font-medium">
                    {reviewsData.rating.toFixed(1)} · {reviewsData.userRatingCount} review{reviewsData.userRatingCount !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
            </div>

            {isLoading && (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            )}

            {!isLoading && (!reviewsData?.reviews || reviewsData.reviews.length === 0) && (
              <div className="space-y-4">
                <Card className="bg-muted/20 border-border">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 text-[#FBBC05] mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Live Google Reviews will appear here once the Google Places API is configured.
                    </p>
                    <a
                      href="https://g.page/r/CWbm1yja006BEBM/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline font-medium"
                    >
                      Leave us a review <ExternalLink className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            )}

            {!isLoading && reviewsData?.reviews && reviewsData.reviews.length > 0 && (
              <div className="space-y-4">
                {reviewsData.reviews.map((review, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="bg-muted/20 border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <StarRating rating={review.rating} />
                          {review.relativePublishTimeDescription && (
                            <span className="text-xs text-muted-foreground">{review.relativePublishTimeDescription}</span>
                          )}
                        </div>
                        {review.text && (
                          <p className="text-foreground italic mb-4 leading-relaxed text-sm">
                            "{review.text}"
                          </p>
                        )}
                        <p className="font-semibold text-sm text-foreground">{review.authorName}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                <a
                  href="https://g.page/r/CWbm1yja006BEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                >
                  Leave us a review on Google <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Right Column — Social */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Follow Us</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We share updates, event coverage, and behind-the-scenes content on our socials. Follow us to see what we have been working on.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <a
                href="https://www.facebook.com/EventManagementTeamServices"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid="link-facebook"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-muted/10 border border-border rounded-xl p-6 flex flex-col items-center justify-center min-h-[120px] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5 transition-colors duration-300"
                >
                  <Facebook className="w-8 h-8 text-[#1877F2] mb-2" />
                  <p className="font-medium text-foreground text-sm">EventManagementTeamServices</p>
                  <p className="text-xs text-muted-foreground mt-1">Follow us on Facebook</p>
                </motion.div>
              </a>

              <a
                href="https://www.instagram.com/emtservices.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid="link-instagram"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-muted/10 border border-border rounded-xl p-6 flex flex-col items-center justify-center min-h-[120px] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5 transition-colors duration-300"
                >
                  <Instagram className="w-8 h-8 text-[#E4405F] mb-2" />
                  <p className="font-medium text-foreground text-sm">@emtservices.uk</p>
                  <p className="text-xs text-muted-foreground mt-1">Follow our events on Instagram</p>
                </motion.div>
              </a>

              <a
                href="https://g.page/r/CWbm1yja006BEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid="link-google-reviews"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-muted/10 border border-border rounded-xl p-6 flex flex-col items-center justify-center min-h-[120px] hover:border-[#FBBC05]/40 hover:bg-[#FBBC05]/5 transition-colors duration-300"
                >
                  <Star className="w-8 h-8 text-[#FBBC05] mb-2" />
                  <p className="font-medium text-foreground text-sm">Google Reviews</p>
                  <p className="text-xs text-muted-foreground mt-1">Leave us a review</p>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
