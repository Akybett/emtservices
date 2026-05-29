import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "emt_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0f172a] border-t border-white/10 shadow-2xl"
          role="dialog"
          aria-label="Cookie consent"
          data-testid="cookie-banner"
        >
          <div className="container mx-auto px-4 md:px-6 py-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/90 leading-relaxed">
                  <span className="font-semibold text-white">This website uses cookies</span> to ensure it functions correctly. We do not use advertising or tracking cookies. EMT Services is registered with the{" "}
                  <span className="text-white font-medium">Information Commissioner's Office (ICO)</span> and handles all personal data in accordance with UK data protection legislation.{" "}
                  <a
                    href="/privacy"
                    className="text-white/70 underline underline-offset-2 hover:text-white transition-colors text-sm"
                    data-testid="link-privacy-policy"
                  >
                    Privacy policy
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={decline}
                  className="border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 bg-transparent text-sm"
                  data-testid="button-cookie-decline"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={accept}
                  className="bg-white text-[#0f172a] hover:bg-white/90 font-semibold text-sm"
                  data-testid="button-cookie-accept"
                >
                  Accept
                </Button>
                <button
                  onClick={decline}
                  className="text-white/40 hover:text-white/70 transition-colors ml-1"
                  aria-label="Dismiss"
                  data-testid="button-cookie-dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
