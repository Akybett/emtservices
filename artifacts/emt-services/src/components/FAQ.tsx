import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How many staff can you provide for an event?",
    answer: "We can supply anywhere from a core team of two up to approximately thirty personnel. This is always subject to our other commitments and the availability of our vetted team at the time — something we will always be upfront about when you enquire. We would rather be honest about our capacity than overpromise and underdeliver.",
  },
  {
    question: "Are you CQC-registered? Do you provide patient transport or ambulances?",
    answer: "No. We are not CQC-registered and we do not offer patient conveyance or ambulance services. For events that require clinical provision or transport, we work closely alongside trusted CQC-registered providers and can help coordinate that cover as part of your overall safety plan. We will never overstate our clinical capacity.",
  },
  {
    question: "What happens after I submit the contact form?",
    answer: "Your enquiry goes directly to Sid and Andy — not a sales team or office. One of the directors will review your requirements and get back to you as soon as possible. We will give you an honest assessment of what your event needs and whether we are the right fit. If we are not, we will say so.",
  },
  {
    question: "How do you source and vet your staff?",
    answer: "We bring in vetted specialists for each event rather than holding a large permanent roster. Most of our team comes to us through personal recommendations or direct approaches from trusted industry colleagues. Every operative is personally assessed by the directors before placement, with references actively followed up. Our SIA-licensed staff are experienced professionals with genuine operational background.",
  },
  {
    question: "Will the directors actually be at my event?",
    answer: "As co-owners, Sid and Andy typically work on the ground at events themselves — either as team leads or as additional personnel. This is always subject to our availability and other commitments, but it is a genuine part of how we operate and reflects our hands-on approach throughout our careers.",
  },
  {
    question: "What qualifications do the directors hold?",
    answer: "As co-owners, Sid and Andy both hold a wide variety of professional and industry-recognised qualifications. Specifically regarding health, safety, and fire safety, Andy holds a NEBOSH certification — a gold-standard credential in occupational health, safety, and risk management. Both directors are also registered trainers for Highfield and Pro Trainings, and members of the Association of Healthcare Trainers (AOHT).",
  },
  {
    question: "Do you produce Risk Assessments and Method Statements (RAMS)?",
    answer: "We are well versed in Risk Assessment and Method Statement requirements and follow the Purple Guide and SGSA's Green Guide in our planning. What is appropriate and proportionate for your event is something we will discuss with you as part of the planning process — it depends on the scale, nature, and licensing requirements of your specific event.",
  },
  {
    question: "Will you always be the cheapest option?",
    answer: "Probably not, and we are upfront about that. We pay our staff fairly for the skill and experience they bring, and that is reflected in what we charge. What we offer is a fair, transparent cost for a professional service delivered by people who are accountable for the result.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer: "We cover events across the UK. The best way to find out whether we can help with your specific location and dates is to get in touch — just fill in the contact form and we will be straight with you about feasibility.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Common Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Straight answers to the things people ask us most before making an enquiry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-card hover:bg-muted/40 transition-colors duration-200"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 bg-card">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
