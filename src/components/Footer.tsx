import { ArrowUp, ArrowUpRight } from "lucide-react";
import PersonalSignature from "./PersonalSignature";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-12 border-t border-lagoon-border/50 bg-white/70 backdrop-blur-md overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        
        {/* Sign-off CTA Section */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto pb-6">
          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-lagoon-deep font-medium tracking-tight">
            &ldquo;Let&rsquo;s build something interesting together.&rdquo;
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-5 px-6 py-2.5 rounded-full bg-lagoon-primary text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-lagoon-secondary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Personal Handwritten Cursive Signature */}
          <div className="mt-8">
            <PersonalSignature />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-6 border-t border-lagoon-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
            <a
              href="#top"
              className="font-heading font-semibold text-xs tracking-[0.25em] text-lagoon-deep uppercase hover:text-lagoon-primary transition-colors"
            >
              GNANADA
            </a>
            <span className="hidden md:inline text-lagoon-border">•</span>
            <span className="font-mono text-xs text-lagoon-muted">
              &copy; 2026 Gnanada · Built with curiosity.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-lagoon-deep hover:text-lagoon-primary hover:border-lagoon-primary/40 font-mono text-xs transition-all shadow-2xs"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
