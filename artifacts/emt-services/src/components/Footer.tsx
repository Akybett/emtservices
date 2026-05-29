import { Facebook, Instagram, Star } from "lucide-react";
import logoWordmark from "@assets/Transparent_1779996851927.png";
import { Link } from "wouter";

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
              className="h-16 w-auto mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="mb-2">
              <a href="mailto:info@emtservices.uk" className="hover:text-white transition-colors">
                info@emtservices.uk
              </a>
            </p>
            <p className="text-sm text-white/50 max-w-xs mt-4">
              Professional event safety, medical cover, and security services across the UK. Owner-operated. 35 years of experience.
            </p>
            <div className="mt-4">
              <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Follow Us on Socials</p>
            <div className="flex items-center justify-center md:justify-end space-x-6 mb-6">
              <a
                href="https://www.facebook.com/EventManagementTeamServices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/emtservices.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#E4405F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://g.page/r/CWbm1yja006BEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#FBBC05] transition-colors"
                aria-label="Google Reviews"
              >
                <Star className="w-6 h-6" />
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
