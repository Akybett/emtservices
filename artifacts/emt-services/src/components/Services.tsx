import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Users, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import securityImg from "@assets/690691086_122175045026935652_6242328256642375166_n_1780012979478.jpg";
import medicalImg from "@assets/9b51872d-f792-485b-89a3-c7e5bc79f198_1780050541978.jpg";
import stewardingImg from "@assets/generated_images/stewarding_card.png";
import fireSafetyImg from "@assets/generated_images/fire_safety_card.png";

const services = [
  {
    title: "SIA-Licensed Security",
    description: "Our SIA-licensed security personnel are experienced professionals — not individuals fresh to the industry or simply 'badge holders'. Our team is built through personal recommendations and direct approaches from trusted colleagues. Every operative is personally vetted by the directors, with references actively followed up before anyone is placed on an event.",
    icon: ShieldCheck,
    image: securityImg,
    imageAlt: "EMT Services security team in purple hi-vis on the grounds of Herstmonceux Castle",
  },
  {
    title: "Medical & First Aid Cover",
    description: "We provide on-site medical planning and first aid cover. We are not CQC-registered and do not offer patient conveyance. For events requiring clinical or ambulance provision, we work closely alongside trusted CQC-registered providers to ensure the right level of care is in place. We will never overstate our own clinical capacity.",
    icon: HeartPulse,
    image: medicalImg,
    imageAlt: "EMT Services medical team in branded MEDIC hi-vis on standby at an outdoor event",
  },
  {
    title: "Professional Stewarding",
    description: "We bring in specialist stewards for each event rather than maintaining a permanent roster. This keeps us flexible and ensures the right personnel are matched to the right event. Our stewards come to us through personal recommendation and are vetted directly — not sourced from an agency pool.",
    icon: Users,
    image: stewardingImg,
    imageAlt: "Event steward in high visibility vest managing crowd at an outdoor festival",
  },
  {
    title: "Fire Safety Operations",
    description: "Fire safety planning and on-site compliance, structured in accordance with current legislation and industry guidance. Andy holds a NEBOSH certification — a gold-standard credential in occupational health, safety, and risk management — ensuring director-level qualification is applied to every event we cover.",
    icon: Flame,
    image: fireSafetyImg,
    imageAlt: "EMT Services fire safety operative in red high visibility vest at an outdoor event",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We are a small, flexible operation. Rather than holding a large permanent roster, we bring in vetted specialists to suit each event. What you always get is direct access to the directors and full accountability for the team we provide.
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
              <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors duration-300 overflow-hidden">
                {service.image && (
                  <div className="relative w-full h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/60" />
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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
            <span className="font-semibold text-foreground">Staffing capacity:</span> We can supply anywhere from a core team of two up to approximately thirty personnel for an event. This is always subject to our other commitments and the availability of our vetted team at the time — something we will always be upfront about when you enquire.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
