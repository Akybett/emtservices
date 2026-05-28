import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import bgImg from "@assets/PXL_20250822_173135757_1779997274807.jpg";

const points = [
  {
    title: "How We Staff Events",
    description: "We do not maintain a large permanent roster. Instead, we bring in vetted specialists suited to each event. This keeps us flexible and means we only place people we genuinely trust. We are always honest about our capacity and will never overpromise on staffing numbers."
  },
  {
    title: "Vetting & Accountability",
    description: "Our team is built through personal recommendations and direct approaches — not agency pools. We personally vet every operative, actively follow up references, and consult trusted industry colleagues. Our SIA staff are seasoned professionals with real operational experience, not individuals who are new to the industry."
  },
  {
    title: "Qualified at Director Level",
    description: "Both directors hold NEBOSH qualifications — a gold-standard credential in occupational health, safety, and risk management. We are also registered trainers for Highfield and Pro Trainings, and members of the Association of Healthcare Trainers (AOHT). This is offered as reassurance, not as a boast."
  },
  {
    title: "Directors on the Ground",
    description: "As co-owners, Alan and Andy typically work on the ground at events themselves — either as team leads or as additional personnel. This is always subject to our availability and other commitments, but it reflects the hands-on approach that has been central to how we have operated throughout our careers."
  },
  {
    title: "Experienced, Seasoned Teams",
    description: "The majority of our team brings a wealth of life experience and a seasoned professional background to their work. That maturity — in how they handle people, read situations, and de-escalate — is something we actively look for and value when building our teams."
  },
  {
    title: "Pricing & Fair Pay",
    description: "We are not interested in competing on price alone. We pay our staff exactly what they are worth, and that is reflected in what we charge. We will never be the cheapest option in the market, nor do we intend to be — but our pricing will always be completely fair and transparent."
  },
  {
    title: "We Work to the Guides",
    description: "Every event we plan is structured against the Purple Guide and the SGSA's Green Guide. We are well versed in Risk Assessment and Method Statement requirements and will discuss what is appropriate and proportionate for your event as part of the planning process."
  },
  {
    title: "Inclusive by Necessity",
    description: "We actively build teams that reflect the crowds they manage. Understanding the people in front of you matters. Over the years we have found that diverse, well-matched teams simply perform better in complex crowd environments."
  },
  {
    title: "ICO Registered & Know Our Limits",
    description: "We are registered with the Information Commissioner's Office (ICO). Any data you share with us is held securely under current legislation. And if a project is genuinely beyond what we can deliver to our standard, we say so — we would rather lose the work than let a client down."
  }
];

export default function Foundations() {
  return (
    <section id="foundations" className="relative py-24 overflow-hidden">
      {/* Faded background texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-muted/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Foundation of Our Service</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We are not a large company, and we do not pretend to be. These are the principles the directors of EMT Services have worked to every day across 35 years in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
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
