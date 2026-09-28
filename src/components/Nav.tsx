import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavProps {
  onOpenResume?: () => void;
  onOpenAssistant?: () => void;
}

export default function Nav({ onOpenResume, onOpenAssistant }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "LAB", href: "#lab" },
    { label: "ABOUT", href: "#about" },
    { label: "RESUME", href: "#resume", onClick: onOpenResume },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/70 backdrop-blur-md border-b border-lagoon-primary/10 shadow-[0_4px_20px_rgba(11,114,133,0.03)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-2.5 font-heading font-semibold text-sm tracking-[0.25em] text-lagoon-deep hover:text-lagoon-primary transition-colors duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-lagoon-accent group-hover:scale-125 transition-transform duration-200" />
            <span>GNANADA</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className="font-mono text-xs tracking-[0.16em] text-lagoon-muted hover:text-lagoon-primary transition-colors duration-200 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-lagoon-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {onOpenAssistant && (
              <button
                onClick={onOpenAssistant}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider text-lagoon-primary bg-white/80 border border-lagoon-primary/15 hover:border-lagoon-accent/50 hover:bg-white shadow-xs transition-all duration-200 group"
                title="Ask AI Assistant"
              >
                <Sparkles className="w-3.5 h-3.5 text-lagoon-accent group-hover:rotate-12 transition-transform" />
                <span>AI</span>
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {onOpenAssistant && (
              <button
                onClick={onOpenAssistant}
                className="p-2 rounded-full text-lagoon-primary bg-white/80 border border-lagoon-primary/15"
                aria-label="Open AI Assistant"
              >
                <Sparkles className="w-4 h-4 text-lagoon-accent" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-lagoon-deep hover:text-lagoon-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-30 bg-white/95 backdrop-blur-xl border-b border-lagoon-primary/10 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="font-mono text-sm tracking-widest text-lagoon-deep hover:text-lagoon-primary py-2 flex items-center justify-between border-b border-lagoon-border/50"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-lagoon-muted" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
