import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Users, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import securityImg from "@assets/690691086_122175045026935652_6242328256642375166_n_1779997274809.jpg";
import medicalImg from "@assets/578260726_122142662474935652_771786064564167301_n_1779997274810.jpg";

const services = [
  {
    title: "SIA-Licensed Security",
    description: "SIA-licensed personnel placed and supervised by directors who have managed event security on the ground for over three decades. No layers of management between you and the people responsible.",
    icon: ShieldCheck,
    image: securityImg,
    alt: "EMT Services security team in branded purple hi-vis vests at an outdoor event",
  },
  {
    title: "Medical & Clinical Cover",
    description: "Practical medical planning built on real operational experience. For larger or more complex events, we work alongside trusted CQC-registered providers rather than overstate our own clinical capacity.",
    icon: HeartPulse,
    image: medicalImg,
    alt: "EMT Services medics in branded green hi-vis vests at an outdoor event",
  },
  {
    title: "Professional Stewarding",
    description: "Crowd management, traffic direction, and customer-facing duties carried out by operatives we have personally vetted. We do not simply fill positions — we take responsibility for the people we place.",
    icon: Users,
    image: null,
    alt: "",
  },
  {
    title: "Fire Safety Operations",
    description: "Fire safety planning and on-site compliance for events of all sizes, delivered in accordance with current legislation and the guidance frameworks we have followed throughout our career.",
    icon: Flame,
    image: null,
    alt: "",
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
    transition: { duration: 0.6, ease: "easeOut" }
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
            We are a small operation. What we offer is direct access to experienced, accountable professionals — not a large agency placing unfamiliar staff.
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
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                )}
                <CardHeader className={service.image ? "pt-4" : ""}>
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
      </div>
    </section>
  );
}
