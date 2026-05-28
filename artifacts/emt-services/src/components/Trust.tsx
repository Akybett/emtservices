import { motion } from "framer-motion";
import { Facebook, Instagram, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by the Community</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Testimonials & Logos */}
          <div>
            <div className="space-y-6 mb-12">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="bg-muted/20 border-border">
                    <CardContent className="p-6">
                      <p className="text-foreground italic mb-4">
                        "EMT Services provided exemplary cover for our annual city festival. Their staff were professional, discreet, and handled every situation with absolute competence."
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                          V{i}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">Venue Manager</p>
                          <p className="text-xs text-muted-foreground">Local Council Event</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Partnering with</p>
              <div className="flex flex-wrap gap-6 items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-12 w-24 bg-muted rounded flex items-center justify-center opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                    <span className="text-xs font-bold text-muted-foreground">LOGO {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Social Feeds */}
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
