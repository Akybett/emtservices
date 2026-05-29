import { motion } from "framer-motion";
import { Award, GraduationCap, Users, HandHelping } from "lucide-react";
import emblem from "@assets/Transparent-icon_1780050423852.png";
import bgImg from "@assets/IMG_20260503_160246_1780012947272.jpg";

const directors = [
  {
    name: "Sid",
    role: "Co-Founder & Director",
    bio: "A hands-on director who is typically on the ground at events — leading teams or working alongside them. Sid brings decades of operational experience and a personal commitment to every event we cover.",
    credentials: [
      "Registered trainer — Highfield & Pro Trainings",
      "Member, Association of Healthcare Trainers (AOHT)",
    ],
  },
  {
    name: "Andy",
    role: "Co-Founder & Director",
    bio: "Andy leads on health, safety and fire safety planning, applying director-level qualification to every event. Like Sid, he works on the ground rather than from behind a desk.",
    credentials: [
      "NEBOSH certified — health, safety & risk management",
      "Registered trainer — Highfield & Pro Trainings",
      "Member, Association of Healthcare Trainers (AOHT)",
    ],
  },
];

const ethos = [
  {
    icon: HandHelping,
    title: "On the Ground",
    text: "The directors typically work events themselves — as team leads or additional personnel.",
  },
  {
    icon: GraduationCap,
    title: "Qualified at Director Level",
    text: "Industry-recognised qualifications, including Andy's NEBOSH certification.",
  },
  {
    icon: Users,
    title: "Personally Accountable",
    text: "Every operative is vetted by the directors — your enquiry reaches them directly.",
  },
  {
    icon: Award,
    title: "35 Years' Experience",
    text: "Over three decades of ground-level event safety experience between them.",
  },
];

export default function Leadership() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#0f172a]">
      {/* Faded background texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/95 to-[#0f172a]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
            Owner-Operated
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the Directors
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            EMT Services is led by its two co-founders, Sid and Andy. When you work with us,
            you deal directly with the people running the company — not a sales team or an
            office.
          </p>
        </div>

        {/* Director cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {directors.map((director, index) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center flex-shrink-0">
                  <img
                    src={emblem}
                    alt=""
                    aria-hidden="true"
                    className="w-9 h-9 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{director.name}</h3>
                  <p className="text-sm text-primary/90 font-medium uppercase tracking-wide">
                    {director.role}
                  </p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">{director.bio}</p>
              <ul className="space-y-2.5 pt-5 border-t border-white/10">
                {director.credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/60">{cred}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Ethos strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {ethos.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center px-4 py-6 rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <item.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-1.5">{item.title}</h4>
              <p className="text-sm text-white/50 leading-snug">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
