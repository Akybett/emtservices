import { motion } from "framer-motion";
import { Facebook, Instagram, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import djConcertImg from "@assets/PXL_20230701_213226230_1779997274809.jpg";
import festivalCrowdImg from "@assets/PXL_20250822_173135757_1779997274807.jpg";
import manorHouseImg from "@assets/PXL_20250627_190937580_1779997274808.jpg";
import fireworksImg from "@assets/PXL_20241108_194503905.RESTORED_1779997274806.jpg";
import bigTopImg from "@assets/leeds-festival_(1)_1779997274806.jpg";
import indoorVenueImg from "@assets/PXL_20251004_024016677_1779997274807.jpg";

const galleryImages = [
  { src: djConcertImg, alt: "Outdoor concert stage with DJ performing to a crowd", caption: "Concert" },
  { src: festivalCrowdImg, alt: "Open-air festival crowd at a summer event", caption: "Open-Air Festival" },
  { src: manorHouseImg, alt: "Event at a historic manor house with crowd on lawn", caption: "Estate Event" },
  { src: fireworksImg, alt: "Emergency ambulance on standby at a fireworks display", caption: "Fireworks Display" },
  { src: bigTopImg, alt: "Festival big-top tents at a summer music event", caption: "Summer Festival" },
  { src: indoorVenueImg, alt: "Indoor venue with stage lighting", caption: "Indoor Event" },
];

const testimonials = [
  {
    quote: "Straightforward to deal with from start to finish. They told us exactly what we needed, did not try to upsell anything, and the cover on the day was solid.",
    name: "Event Organiser",
    event: "Community Event",
    initial: "EO",
  },
  {
    quote: "We needed medical and stewarding cover for a small outdoor event. They were honest about what was appropriate for our size and did not try to oversell. Exactly what we needed.",
    name: "Venue Manager",
    event: "Outdoor Event",
    initial: "VM",
  },
  {
    quote: "The directors were on site in person. That is not something you get from a larger agency and it made a real difference to how things ran on the day.",
    name: "Event Coordinator",
    event: "Public Event",
    initial: "EC",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Events We Have Covered</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A honest cross-section of the work we do — from small community events to larger gatherings. We do not pick and choose what to show based on scale.
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
          {/* Left Column — Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">What Clients Say</h3>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="bg-muted/20 border-border">
                    <CardContent className="p-6">
                      <p className="text-foreground italic mb-4 leading-relaxed">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">
                          {t.initial}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.event}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — Social */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Live Deployments</h3>
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
                  className="bg-muted/10 border border-border rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5 transition-colors duration-300"
                >
                  <Facebook className="w-10 h-10 text-[#1877F2] mb-3" />
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
                  className="bg-muted/10 border border-border rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5 transition-colors duration-300"
                >
                  <Instagram className="w-10 h-10 text-[#E4405F] mb-3" />
                  <p className="font-medium text-foreground text-sm">@emtservices.uk</p>
                  <p className="text-xs text-muted-foreground mt-1">View deployment galleries</p>
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
                  className="bg-muted/10 border border-border rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px] hover:border-[#FBBC05]/40 hover:bg-[#FBBC05]/5 transition-colors duration-300"
                >
                  <Star className="w-10 h-10 text-[#FBBC05] mb-3" />
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
