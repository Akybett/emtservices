import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Users, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "SIA-Licensed Security",
    description: "We operate under a unified command structure for sophisticated crowd management with SIA-licensed personnel and comprehensive site security.",
    icon: ShieldCheck,
  },
  {
    title: "Medical & Clinical Cover",
    description: "Comprehensive event medical planning and scalable clinical solutions, frequently partnering with CQC-registered providers for large or complex events.",
    icon: HeartPulse,
  },
  {
    title: "Professional Stewarding",
    description: "Expert crowd management, traffic direction, and customer service delivered by trained, vetted operatives.",
    icon: Users,
  },
  {
    title: "Fire Safety Operations",
    description: "Integrated fire safety management and regulatory compliance for events of all sizes.",
    icon: Flame,
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
          <div className="w-20 h-1 bg-primary mx-auto"></div>
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
              <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors duration-300">
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
      </div>
    </section>
  );
}
