import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Vigorously Vetted Personnel",
    description: "We do not simply supply jacket fillers. Our stringent vetting process significantly exceeds standard industry benchmarks to guarantee high-calibre, reliable operatives."
  },
  {
    title: "Diverse Team Expertise",
    description: "We actively foster inclusive teams from all backgrounds. This delivers the cultural understanding essential for managing diverse crowds safely."
  },
  {
    title: "Certified Knowledge",
    description: "Our senior management includes registered trainers for Highfield and Pro Trainings. We are proud members of the Association of Healthcare Trainers (AOHT) and adhere strictly to their Code of Ethics."
  },
  {
    title: "Benchmarked Methodologies",
    description: "Every deployment is validated against the Purple Guide and the SGSA's Green Guide. We provide comprehensive Event Risk Assessments and Method Statements (RAMS) to ensure transparent legal compliance."
  },
  {
    title: "Data Compliance",
    description: "We are registered with the Information Commissioner's Office (ICO), ensuring all personal data is managed securely and in full compliance with applicable legislation."
  },
  {
    title: "Integrity & Liaison",
    description: "We proactively manage relationships with Safety Advisory Groups (SAGs). We never overreach — if a project is outside our operational capacity, we honestly advise the client or decline the work."
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
            Operational excellence built on 35 years of meticulous planning and uncompromising standards.
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
