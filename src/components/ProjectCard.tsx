import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/content";
import { GithubIcon } from "./Icons";
import { 
  PlantWiseMockup, 
  TeachMeWrongMockup, 
  TimeSenseiMockup, 
  AirDrawingMockup,
  Photo3DMockup,
  KaalChakraMockup, 
  CodeMentorMockup 
} from "./ProjectMockups";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Render specific interactive mockup container
  const renderVisualMockup = () => {
    switch (project.demoType) {
      case "plantwise":
        return <PlantWiseMockup />;
      case "teachmewrong":
        return <TeachMeWrongMockup />;
      case "timesensei":
        return <TimeSenseiMockup />;
      case "airdrawing":
        return <AirDrawingMockup />;
      case "photo3d":
        return <Photo3DMockup />;
      case "kaalchakra":
        return <KaalChakraMockup />;
      case "codementor":
        return <CodeMentorMockup />;
      case "keno":
        return (
          <div className="w-full rounded-2xl glass-panel-subtle p-4 flex flex-col gap-2.5 select-none">
            <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2">
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-lagoon-deep">
                KEYBOARD FREQUENCY ENGINE
              </span>
              <span className="font-mono text-[10px] text-lagoon-primary bg-lagoon-glow px-2 py-0.5 rounded-full">
                ML ADAPTIVE
              </span>
            </div>
            <div className="flex justify-center items-end h-20 gap-1 p-2 bg-slate-900 rounded-xl">
              {["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"].map((note, idx) => (
                <button
                  key={note}
                  onClick={(e) => {
                    e.stopPropagation();
                    try {
                      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
                      const ctx = new AudioCtx();
                      const osc = ctx.createOscillator();
                      const gain = ctx.createGain();
                      const freqs = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
                      osc.type = "sine";
                      osc.frequency.setValueAtTime(freqs[idx], ctx.currentTime);
                      gain.gain.setValueAtTime(0.2, ctx.currentTime);
                      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
                      osc.connect(gain);
                      gain.connect(ctx.destination);
                      osc.start();
                      osc.stop(ctx.currentTime + 0.5);
                    } catch {}
                  }}
                  className="flex-1 max-w-[32px] h-full bg-white hover:bg-lagoon-accent active:bg-lagoon-primary rounded-b shadow flex items-end justify-center pb-1 text-[9px] font-mono font-bold text-slate-800"
                >
                  {note}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-lagoon-muted text-center font-mono">
              Click keys to play Web Audio synth notes
            </p>
          </div>
        );
      case "recipora":
        return (
          <div className="w-full rounded-2xl glass-panel-subtle p-4 flex flex-col gap-2.5 select-none">
            <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2">
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-lagoon-deep">
                ZERO-WASTE INGREDIENT MATCHER
              </span>
              <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                96% MATCH
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Chickpeas", "Spinach", "Tomatoes", "Garlic"].map((item) => (
                <span key={item} className="px-2 py-0.5 bg-white border border-lagoon-border rounded-md text-[10px] font-medium text-lagoon-deep">
                  + {item}
                </span>
              ))}
            </div>
            <div className="p-2 rounded-lg bg-white/70 border border-lagoon-accent/30 text-[10px] text-lagoon-deep">
              <span className="font-semibold text-lagoon-primary block">Mediterranean Spiced Stew</span>
              <span className="text-lagoon-muted text-[9px]">Calculates zero grocery waste recipe</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article
      onClick={() => onOpenCaseStudy(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl p-6 sm:p-7 transition-all duration-400 ease-out border bg-white/70 backdrop-blur-md shadow-glass-sm hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
      style={{
        borderColor: isHovered ? "rgba(11, 114, 133, 0.3)" : "rgba(11, 114, 133, 0.12)",
      }}
    >
      <div>
        {/* Top Metadata Header */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-lagoon-primary">
              PROJ // {project.number}
            </span>
            <span className="w-1 h-1 rounded-full bg-lagoon-border" />
            <span className="font-mono text-[10px] tracking-wider uppercase text-lagoon-muted font-semibold">
              {project.category}
            </span>
          </div>

          {project.badge && (
            <span className="font-mono text-[9px] tracking-wider text-lagoon-primary bg-lagoon-glow border border-lagoon-accent/30 px-2 py-0.5 rounded-full font-bold">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-heading font-semibold text-xl sm:text-2xl text-lagoon-deep tracking-tight group-hover:text-lagoon-primary transition-colors">
          {project.name}
        </h3>
        <p className="font-mono text-xs text-lagoon-primary font-medium mt-0.5 mb-3">
          {project.subtitle}
        </p>

        {/* Concise Summary */}
        <p className="text-xs sm:text-sm text-lagoon-muted leading-relaxed font-normal mb-5 line-clamp-2">
          {project.shortSummary}
        </p>

        {/* Interactive Demonstration Container */}
        <div className="mb-5 transition-transform duration-300 ease-out group-hover:scale-[1.01]">
          {renderVisualMockup()}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono text-lagoon-deep bg-white/80 border border-lagoon-border shadow-2xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Container Footer: Key Metric & Inspect Button */}
      <div className="flex items-center justify-between pt-4 border-t border-lagoon-border/60 mt-auto">
        {project.metric ? (
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-lagoon-primary">
              {project.metric.value}
            </span>
            <span className="text-[10px] text-lagoon-muted font-medium">
              {project.metric.label}
            </span>
          </div>
        ) : (
          <span className="text-[10px] font-mono text-lagoon-muted">PROD READY</span>
        )}

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full glass-panel text-lagoon-muted hover:text-lagoon-primary hover:bg-white transition-colors"
              title="View on GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}

          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-lagoon-primary text-white font-mono text-[11px] tracking-wider uppercase font-semibold hover:bg-lagoon-secondary transition-all group-hover:shadow-xs"
          >
            <span>DETAILS</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}
