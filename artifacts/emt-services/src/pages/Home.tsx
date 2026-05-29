import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EventTypes from "@/components/EventTypes";
import Foundations from "@/components/Foundations";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Services />
        <EventTypes />
        <Foundations />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
