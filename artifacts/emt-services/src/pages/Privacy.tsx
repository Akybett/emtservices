import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoWordmark from "@assets/Transparent_1779996851927.png";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple header */}
      <header className="border-b border-border bg-[#0f172a]">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <a href="/">
            <img
              src={logoWordmark}
              alt="EMT Services"
              className="h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to website
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: May 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground">

          <section>
            <h2 className="text-xl font-bold mb-3">1. Who we are</h2>
            <p className="text-muted-foreground leading-relaxed">
              EMT Services is an owner-operated UK event safety company providing security, medical cover, stewarding, and fire safety services. We are registered with the Information Commissioner's Office (ICO) under UK data protection legislation.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              If you have any questions about this policy or how we handle your data, please contact us at:{" "}
              <a href="mailto:info@emtservices.uk" className="text-primary hover:underline font-medium">
                info@emtservices.uk
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. What information we collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We only collect information you provide to us directly through the contact form on this website. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Your event date and location</li>
              <li>A description of the services you are enquiring about</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We do not use tracking cookies, advertising scripts, or analytics tools that collect data about your browsing behaviour. This website uses only functional cookies necessary for it to operate correctly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Why we collect it</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect contact form submissions solely to respond to your enquiry and assess whether we are able to help with your event. We do not use your information for marketing purposes, and we do not sell or share it with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Legal basis for processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We process your personal data on the basis of <strong>legitimate interests</strong> — specifically, to respond to an enquiry you have initiated with us. Where we go on to provide services, processing is also necessary for the performance of a contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. How long we keep your data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Enquiry data is retained for no longer than 12 months from the date of receipt, or for the duration of any ongoing working relationship, after which it is securely deleted. If you ask us to delete your information sooner, we will do so promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Your rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access the personal data we hold about you</li>
              <li>Ask us to correct inaccurate data</li>
              <li>Ask us to delete your data</li>
              <li>Object to or restrict our processing of your data</li>
              <li>Receive your data in a portable format</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@emtservices.uk" className="text-primary hover:underline font-medium">
                info@emtservices.uk
              </a>. We will respond within one month.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. ICO registration</h2>
            <p className="text-muted-foreground leading-relaxed">
              EMT Services is registered with the Information Commissioner's Office (ICO). If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the ICO at{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                ico.org.uk
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Changes to this policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy from time to time. Any changes will be posted on this page with a revised date at the top.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMT Services. Registered with the ICO.</p>
          <p className="mt-1">
            <a href="mailto:info@emtservices.uk" className="hover:text-foreground transition-colors">
              info@emtservices.uk
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
