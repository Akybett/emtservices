import { motion } from "framer-motion";
import { Music2, Flame, Users, Shield, PartyPopper, Building2, TreePine, Sparkles, Heart } from "lucide-react";

const eventTypes = [
  { label: "Music Festivals", icon: Music2 },
  { label: "Cultural Events", icon: Sparkles },
  { label: "Carnivals & Parades", icon: PartyPopper },
  { label: "Pride Events", icon: Heart },
  { label: "Rockabilly Events", icon: Music2 },
  { label: "Camping Shows", icon: TreePine },
  { label: "Castle & Estate Events", icon: Building2 },
  { label: "Fireworks Displays", icon: Sparkles },
  { label: "Outdoor Concerts", icon: Music2 },
  { label: "Community Fêtes", icon: PartyPopper },
  { label: "Corporate Events", icon: Building2 },
  { label: "Charity Events", icon: Users },
  { label: "Indoor Raves", icon: Flame },
  { label: "Country Fairs", icon: TreePine },
  { label: "Sporting Events", icon: Shield },
];

export default function EventTypes() {
  return (
    <section className="py-16 bg-[#0f172a] border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Types of events we cover</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">From intimate gatherings to large-scale events</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-200 text-center"
            >
              <event.icon className="w-5 h-5 text-primary/80 flex-shrink-0" />
              <span className="text-sm text-white/70 font-medium leading-tight">{event.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/60 mt-10 max-w-2xl mx-auto">
          Among the events we have been proud to support are cultural occasions such as the{" "}
          <span className="font-semibold text-white">Lammas Festival</span> and{" "}
          <span className="font-semibold text-white">Eastbourne Carnival</span>.
        </p>

        <p className="text-center text-white/40 text-sm mt-4">
          Not sure if your event fits? <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="text-white/60 hover:text-white underline underline-offset-2 transition-colors">Get in touch</a> — we will tell you honestly whether we are the right fit.
        </p>
      </div>
    </section>
  );
}
