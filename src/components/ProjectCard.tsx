import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/content";
import { GithubIcon } from "./Icons";
import { 
  PlantWiseMockup, 
  TeachMeWrongMockup, 
  TimeSenseiMockup, 
  KaalChakraMockup, 
  CodeMentorMockup 
} from "./ProjectMockups";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Render specific interactive mockup based on project demoType
  const renderVisualMockup = () => {
    switch (project.demoType) {
      case "plantwise":
        return <PlantWiseMockup />;
      case "teachmewrong":
        return <TeachMeWrongMockup />;
      case "timesensei":
        return <TimeSenseiMockup />;
      case "kaalchakra":
        return <KaalChakraMockup />;
      case "codementor":
        return <CodeMentorMockup />;
      case "keno":
        return (
          <div className="w-full rounded-2xl glass-panel p-6 border border-white/80 shadow-glass-sm flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-lagoon-deep">
                PIANO KEYBOARD FREQUENCY ENGINE
              </span>
              <span className="font-mono text-xs text-lagoon-primary bg-lagoon-glow px-2.5 py-0.5 rounded-full">
                ML DIFFICULTY ADAPTIVE
              </span>
            </div>
            {/* Interactive Piano Keys */}
            <div className="flex justify-center items-end h-32 gap-1.5 p-3 bg-slate-900 rounded-xl">
              {["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"].map((note, idx) => (
                <button
                  key={note}
                  onClick={() => {
                    try {
                      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
                      const osc = ctx.createOscillator();
                      const gain = ctx.createGain();
                      const freqs = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
                      osc.type = "sine";
                      osc.frequency.setValueAtTime(freqs[idx], ctx.currentTime);
                      gain.gain.setValueAtTime(0.2, ctx.currentTime);
                      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
                      osc.connect(gain);
                      gain.connect(ctx.destination);
                      osc.start();
                      osc.stop(ctx.currentTime + 0.6);
                    } catch {}
                  }}
                  className="flex-1 max-w-[42px] h-full bg-white hover:bg-lagoon-accent active:bg-lagoon-primary rounded-b-md shadow transition-colors flex items-end justify-center pb-2 text-[10px] font-mono font-bold text-slate-800"
                >
                  {note}
                </button>
              ))}
            </div>
            <p className="text-xs text-lagoon-muted text-center font-mono">
              Click keys to play synth notes synthesized via browser Web Audio API
            </p>
          </div>
        );
      case "recipora":
        return (
          <div className="w-full rounded-2xl glass-panel p-6 border border-white/80 shadow-glass-sm flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-lagoon-deep">
                PANTRY INGREDIENT EMBEDDING MATCHER
              </span>
              <span className="font-mono text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                ZERO-WASTE DISCOVERY
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Chickpeas", "Spinach", "Tomatoes", "Garlic", "Cumin"].map((item) => (
                <span key={item} className="px-3 py-1 bg-white border border-lagoon-border rounded-lg text-xs font-medium text-lagoon-deep">
                  + {item}
                </span>
              ))}
            </div>
            <div className="p-3.5 rounded-xl bg-white/70 border border-lagoon-accent/30 text-xs">
              <div className="font-semibold text-lagoon-primary flex items-center justify-between">
                <span>Top Match: Mediterranean Spinach & Spiced Chickpea Stew</span>
                <span className="font-mono text-[10px] text-emerald-600">96% pantry utilization</span>
              </div>
              <p className="text-lagoon-muted mt-1 text-[11px]">
                Vector match uses 5 out of 5 expiring pantry staples with zero extra groceries required.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-out border bg-white/60 backdrop-blur-md shadow-glass-sm hover:shadow-glass hover:bg-white/80 hover:-translate-y-1.5"
      style={{
        borderColor: isHovered ? "rgba(11, 114, 133, 0.28)" : "rgba(11, 114, 133, 0.12)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Side: Metadata & Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Top Index & Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm font-semibold text-lagoon-primary">
                PROJ // {project.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-lagoon-border" />
              <span className="font-mono text-xs tracking-wider uppercase text-lagoon-muted font-medium">
                {project.category}
              </span>
              {project.badge && (
                <span className="ml-auto font-mono text-[10px] tracking-wider text-lagoon-primary bg-lagoon-glow border border-lagoon-accent/30 px-2.5 py-0.5 rounded-full font-bold">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-lagoon-deep tracking-tight">
              {project.name}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-lagoon-primary font-medium mt-1 mb-4">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-lagoon-muted leading-relaxed font-normal mb-6">
              {project.description}
            </p>

            {/* Key Metric Badge if present */}
            {project.metric && (
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/80 border border-lagoon-accent/25 shadow-xs mb-6">
                <span className="font-mono text-lg font-bold text-lagoon-primary">
                  {project.metric.value}
                </span>
                <span className="text-xs text-lagoon-muted font-medium">
                  {project.metric.label}
                </span>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono text-lagoon-deep bg-white/70 border border-lagoon-border/80 shadow-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-lagoon-border/60">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lagoon-primary text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-lagoon-secondary hover:shadow-md transition-all duration-300 group"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel text-lagoon-deep font-mono text-xs tracking-wider uppercase font-medium hover:border-lagoon-primary/40 hover:bg-white transition-all duration-300"
              >
                <GithubIcon className="w-3.5 h-3.5 text-lagoon-primary" />
                <span>GITHUB</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Interactive Technical Mockup Demonstration */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="w-full transition-transform duration-500 ease-out" style={{
            transform: isHovered ? "scale(1.01)" : "scale(1)",
          }}>
            {renderVisualMockup()}
          </div>
        </div>

      </div>
    </article>
  );
}
