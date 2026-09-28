import { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "../data/content";
import { GithubIcon } from "./Icons";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/30 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 border border-white/80 p-6 sm:p-10 shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-lagoon-bg border border-lagoon-border text-lagoon-muted hover:text-lagoon-deep hover:bg-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm font-semibold text-lagoon-primary">
            PROJ // {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-lagoon-border" />
          <span className="font-mono text-xs tracking-wider uppercase text-lagoon-muted font-medium">
            {project.category}
          </span>
          {project.metric && (
            <span className="ml-auto font-mono text-xs text-lagoon-primary bg-lagoon-glow px-2.5 py-0.5 rounded-full font-bold">
              {project.metric.value} {project.metric.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-lagoon-deep tracking-tight">
          {project.name}
        </h2>
        <p className="font-mono text-sm sm:text-base text-lagoon-primary font-medium mt-1 mb-6">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-base text-lagoon-muted leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Technical Architecture & Workflow Flow */}
        <div className="mb-8 p-5 rounded-2xl bg-lagoon-bg/70 border border-lagoon-border">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-lagoon-primary mb-3">
            EXECUTION PIPELINE & ARCHITECTURE
          </h4>
          <div className="flex flex-col gap-2.5">
            {project.workflow.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-lagoon-deep">
                <span className="w-5 h-5 rounded-full bg-lagoon-primary/10 text-lagoon-primary font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="font-mono">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Bullets */}
        <div className="mb-8">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-lagoon-deep mb-3">
            KEY ENGINEERING DECISIONS
          </h4>
          <ul className="flex flex-col gap-3">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-lagoon-muted leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-lagoon-accent shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-lagoon-muted mb-3">
            TECHNOLOGY STACK
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-lagoon-deep bg-white border border-lagoon-border shadow-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-lagoon-border">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-lagoon-border font-mono text-xs text-lagoon-muted hover:bg-lagoon-bg transition-colors"
          >
            Close
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-lagoon-primary text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-lagoon-secondary transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>VIEW REPO ON GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
