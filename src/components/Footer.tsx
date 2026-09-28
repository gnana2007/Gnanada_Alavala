import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-14 border-t border-lagoon-border/50 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Branding */}
        <div>
          <a
            href="#top"
            className="font-heading font-semibold text-sm tracking-[0.25em] text-lagoon-deep uppercase hover:text-lagoon-primary transition-colors inline-block mb-1"
          >
            GNANADA
          </a>
          <p className="font-mono text-xs text-lagoon-primary font-medium tracking-wide">
            AI · FULL STACK · COMPUTER VISION · HARDWARE
          </p>
          <p className="text-xs text-lagoon-muted mt-2 font-normal">
            Built with curiosity and too many prototypes.
          </p>
        </div>

        {/* Right Info & Scroll to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <span className="font-mono text-xs text-lagoon-muted">
            &copy; 2026 Gnanada. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-lagoon-deep hover:text-lagoon-primary hover:border-lagoon-primary/40 font-mono text-xs transition-all"
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
