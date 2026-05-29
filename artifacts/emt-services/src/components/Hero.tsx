import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ShieldCheck, Award, UserCheck, Lock } from "lucide-react";
import heroImg from "@assets/PXL_20230701_213226230_1779997274809.jpg";
import logoWordmark from "@assets/Transparent_1779996851927.png";

const trustSignals = [
  { icon: Clock, label: "35 Years' Experience" },
  { icon: UserCheck, label: "Owner-Operated" },
  { icon: ShieldCheck, label: "SIA-Licensed" },
  { icon: Award, label: "NEBOSH Qualified" },
  { icon: Lock, label: "ICO Registered" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Professional event safety staff at outdoor festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Lockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <img
              src={logoWordmark}
              alt="EMT Services"
              className="h-20 md:h-28 w-auto drop-shadow-lg"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Event Safety.<br />
              <span className="text-white/90">35 Years of Hands-On Experience.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
              A small, owner-operated firm led by two directors with over three decades of
              ground-level experience — honest about what we do, transparent about how we
              work, and personally invested in every event we cover.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold shadow-lg w-full sm:w-auto"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Cover
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 font-semibold w-full sm:w-auto"
              onClick={() => {
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Services
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-2 text-white/75"
              >
                <signal.icon className="w-4 h-4 text-white/60" />
                <span className="text-sm font-medium">{signal.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
