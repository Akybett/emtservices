import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse } from "lucide-react";
import bgImg from "@assets/PXL_20250822_173135757_1779997274807.jpg";
import aohtLogo from "@assets/AoHT-Member-Logo_1780063205128.png";
import proTrainingsLogo from "@assets/ProTrainings_Logo_-_stacked_(RGB)_1780063367815.png";
import highfieldLogo from "@assets/HG_Logo_1780063421961.png";
import icoLogo from "@assets/kisspng-information-commissioner-s-office-united-kingdom-m-5b1_1780063529160.jpg";

const credentials = [
  { src: aohtLogo, alt: "Association of Healthcare Trainers — Member", imgClass: "max-h-14" },
  { src: proTrainingsLogo, alt: "ProTrainings — Registered Trainers", imgClass: "max-h-16" },
  { src: highfieldLogo, alt: "Highfield — Registered Trainers", imgClass: "max-h-7" },
  { src: icoLogo, alt: "Information Commissioner's Office — Registered", imgClass: "max-h-14" },
  {
    title: "ResusReady",
    subtitle: "Membership RR-715313",
    alt: "ResusReady — Member RR-715313",
  },
] as const;

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
    description: "As co-owners, Sid and Andy both hold a wide variety of professional and industry-recognised qualifications. Specifically regarding health, safety, and fire safety, Andy holds a NEBOSH certification, ensuring EMT Services brings director-level qualification to this critical area. Both directors are also registered trainers for Highfield and Pro Trainings, and members of the Association of Healthcare Trainers (AOHT). This is offered as reassurance, not as a boast."
  },
  {
    title: "Directors on the Ground",
    description: "As co-owners, Sid and Andy typically work on the ground at events themselves — either as team leads or as additional personnel. This is always subject to our availability and other commitments, but it reflects the hands-on approach that has been central to how we have operated throughout our careers."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {point.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Memberships & Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-12 border-t border-border/60"
        >
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-10">
            Memberships &amp; Accreditations
          </h3>
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 sm:gap-4">
            {credentials.map((item) => (
              <div
                key={item.alt}
                className="flex h-28 w-44 items-center justify-center rounded-2xl bg-white px-6 ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg"
              >
                {"src" in item ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`${item.imgClass} w-auto max-w-full object-contain`}
                  />
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <HeartPulse className="mb-1.5 h-7 w-7 text-primary" />
                    <span className="text-sm font-bold leading-tight text-foreground">{item.title}</span>
                    <span className="mt-0.5 text-[11px] text-muted-foreground">{item.subtitle}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
