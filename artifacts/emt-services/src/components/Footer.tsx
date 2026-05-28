import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoWordmark from "@assets/Transparent_1779996851927.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white/80 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <img
              src={logoWordmark}
              alt="EMT Services"
              className="h-12 w-auto mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="mb-2">
              <a href="mailto:info@emtservices.uk" className="hover:text-white transition-colors">
                info@emtservices.uk
              </a>
            </p>
            <p className="text-sm text-white/50 max-w-xs mt-4">
              Providing professional event safety, medical cover, and security services across the UK for 35 years.
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-6 mb-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-sm text-white/50 space-y-2">
              <p>Registered with the Information Commissioner's Office (ICO).</p>
              <p>&copy; {currentYear} EMT Services. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
