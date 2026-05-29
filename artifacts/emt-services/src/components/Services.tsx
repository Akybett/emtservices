import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Users, Flame, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import securityImg from "@assets/690691086_122175045026935652_6242328256642375166_n_1780012979478.jpg";
import medicalImg from "@assets/9b51872d-f792-485b-89a3-c7e5bc79f198_1780050541978.jpg";
import stewardingImg from "@assets/generated_images/stewarding_card.png";
import fireSafetyImg from "@assets/generated_images/fire_safety_card.png";

const services = [
  {
    title: "SIA-Licensed Security",
    lead: "Experienced, personally vetted operatives — never simply 'badge holders'.",
    icon: ShieldCheck,
    image: securityImg,
    imageAlt:
      "EMT Services security team in purple hi-vis on the grounds of Herstmonceux Castle",
    points: [
      "Seasoned professionals, not individuals fresh to the industry",
      "Built through personal recommendations and trusted referrals",
      "Every operative vetted by the directors, with references followed up",
    ],
  },
  {
    title: "Medical & First Aid Cover",
    lead: "On-site medical planning and first aid cover, with honest limits.",
    icon: HeartPulse,
    image: medicalImg,
    imageAlt:
      "EMT Services medical team in branded MEDIC hi-vis on standby at an outdoor event",
    points: [
      "On-site medical planning and first aid provision",
      "Not CQC-registered; no patient conveyance offered",
      "We partner with trusted CQC-registered providers where clinical cover is needed",
    ],
  },
  {
    title: "Professional Stewarding",
    lead: "Specialist stewards matched to each event — vetted directly, never agency pools.",
    icon: Users,
    image: stewardingImg,
    imageAlt:
      "Event steward in high visibility vest managing crowd at an outdoor festival",
    points: [
      "Specialists brought in per event, not a permanent roster",
      "The right personnel matched to the right event",
      "Sourced by personal recommendation and vetted directly",
    ],
  },
  {
    title: "Fire Safety Operations",
    lead: "Fire safety planning and on-site compliance to current legislation.",
    icon: Flame,
    image: fireSafetyImg,
    imageAlt:
      "EMT Services fire safety operative in red high visibility vest at an outdoor event",
    points: [
      "Structured to current legislation and industry guidance",
      "Andy holds a NEBOSH certification — a gold-standard credential",
      "Director-level qualification applied to every event",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            A small, flexible operation. Rather than holding a large permanent roster, we
            bring in vetted specialists to suit each event. What you always get is direct
            access to the directors and full accountability for the team we provide.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative w-full h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardContent className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.lead}
                  </p>
                  <ul className="space-y-2.5 mt-auto">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-snug">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Staffing capacity note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-xl border border-border bg-muted/30 max-w-3xl mx-auto text-center"
        >
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Staffing capacity:</span> We can
            supply anywhere from a core team of two up to approximately thirty personnel for
            an event. This is always subject to our other commitments and the availability of
            our vetted team at the time — something we will always be upfront about when you
            enquire.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
