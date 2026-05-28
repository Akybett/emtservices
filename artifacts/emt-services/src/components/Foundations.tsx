import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "We Vet Our Own Staff",
    description: "We do not simply supply jacket fillers. Every operative we place has been assessed by the directors personally. Our standards are higher than the industry minimum because our reputation depends on it."
  },
  {
    title: "Inclusive by Necessity",
    description: "We actively build teams that reflect the crowds they manage. Understanding the people in front of you matters. We have found over the years that diverse teams simply perform better in complex crowd environments."
  },
  {
    title: "Qualified at Director Level",
    description: "The directors of EMT Services are registered trainers for Highfield and Pro Trainings, and proud members of the Association of Healthcare Trainers (AOHT). We hold ourselves to that Code of Ethics on every job."
  },
  {
    title: "We Work to the Guides",
    description: "Every deployment is planned against the Purple Guide and the SGSA's Green Guide. We produce full Event Risk Assessments and Method Statements (RAMS) as standard — not as an add-on."
  },
  {
    title: "ICO Registered",
    description: "We are registered with the Information Commissioner's Office (ICO). Any personal data you share with us is held securely and handled in accordance with current data protection legislation."
  },
  {
    title: "We Know Our Limits",
    description: "We manage our own relationships with Safety Advisory Groups (SAGs). If a project is genuinely beyond what we can deliver to our standard, we say so. We would rather lose the work than let a client down."
  }
];

export default function Foundations() {
  return (
    <section id="foundations" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Foundation of Our Service</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We are not a large company, and we do not pretend to be. These are the principles the directors of EMT Services have worked to every single day across 35 years in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
