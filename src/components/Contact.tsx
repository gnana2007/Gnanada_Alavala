import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, MessageSquare } from "lucide-react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-lagoon-border/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Editorial CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-lagoon-muted font-medium">
                HAVE AN IDEA?
              </span>
            </div>

            <h2 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-lagoon-deep uppercase">
              LET&rsquo;S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-lagoon-primary">INTERESTING.</span>
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-lagoon-muted max-w-lg leading-relaxed font-normal">
              Whether you want to discuss AI pipelines, computer vision prototypes, collaborative research, or engineering roles — my inbox is always open.
            </p>

            {/* Email Copy Card */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass-panel border border-lagoon-primary/20 shadow-xs">
                <Mail className="w-4 h-4 text-lagoon-primary" />
                <span className="font-mono text-xs sm:text-sm text-lagoon-deep font-medium">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-lagoon-bg text-lagoon-primary transition-colors ml-2"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <span className="font-mono text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 animate-in fade-in">
                  ✓ Copied to clipboard!
                </span>
              )}
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-lagoon-deep font-mono text-xs tracking-wider uppercase font-semibold hover:border-lagoon-primary/40 hover:bg-white hover:-translate-y-0.5 transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4 text-lagoon-primary" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-lagoon-muted" />
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-lagoon-deep font-mono text-xs tracking-wider uppercase font-semibold hover:border-lagoon-primary/40 hover:bg-white hover:-translate-y-0.5 transition-all shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4 text-lagoon-primary" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-lagoon-muted" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lagoon-primary text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-lagoon-secondary hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Box */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/80 shadow-glass">
              <div className="flex items-center gap-2 mb-6 border-b border-lagoon-border/70 pb-4">
                <MessageSquare className="w-4 h-4 text-lagoon-primary" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-lagoon-deep">
                  DIRECT TRANSMISSION
                </span>
              </div>

              {formSent ? (
                <div className="py-12 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-lagoon-deep">
                    Transmission Dispatched
                  </h4>
                  <p className="text-xs text-lagoon-muted max-w-xs">
                    Thank you! Your message has been sent. Gnanada will respond to your email promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="font-mono text-[11px] text-lagoon-muted uppercase tracking-wider block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ada Lovelace"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-lagoon-border text-xs sm:text-sm text-lagoon-deep focus:outline-none focus:border-lagoon-primary"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-lagoon-muted uppercase tracking-wider block mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ada@computing.org"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-lagoon-border text-xs sm:text-sm text-lagoon-deep focus:outline-none focus:border-lagoon-primary"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-lagoon-muted uppercase tracking-wider block mb-1.5">
                      Message / Project Concept
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Let's build an interactive system..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-lagoon-border text-xs sm:text-sm text-lagoon-deep focus:outline-none focus:border-lagoon-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-lagoon-primary text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-lagoon-secondary hover:shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
