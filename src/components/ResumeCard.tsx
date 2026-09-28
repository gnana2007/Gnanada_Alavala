import { useState } from "react";
import { FileText, Download, Eye, X, Award, GraduationCap, Briefcase } from "lucide-react";
import { profile, projects } from "../data/content";

interface ResumeCardProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  onOpenModal?: () => void;
}

export default function ResumeCard({ isOpenModal, onCloseModal, onOpenModal }: ResumeCardProps) {
  const [internalModal, setInternalModal] = useState(false);
  const showModal = isOpenModal ?? internalModal;
  const handleClose = onCloseModal ?? (() => setInternalModal(false));
  const handleOpen = onOpenModal ?? (() => setInternalModal(true));

  const handleDownload = () => {
    // Print window for clean PDF generation
    window.print();
  };

  return (
    <>
      <section id="resume" className="relative py-20 border-t border-lagoon-border/40 overflow-hidden">
        <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
          
          <div className="max-w-xl mx-auto rounded-3xl glass-panel p-8 sm:p-10 border border-white/80 shadow-glass text-center flex flex-col items-center">
            
            {/* Document Icon Badge */}
            <div className="w-14 h-14 rounded-2xl bg-lagoon-glow text-lagoon-primary border border-lagoon-accent/30 flex items-center justify-center mb-5 shadow-xs">
              <FileText className="w-7 h-7" />
            </div>

            {/* Name & Title */}
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-lagoon-deep tracking-tight">
              {profile.fullName.toUpperCase()}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-lagoon-primary font-medium mt-1 mb-4">
              Computer Science Engineer · SRM University-AP
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["AI / ML", "FULL STACK", "COMPUTER VISION", "IoT"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/80 border border-lagoon-border font-mono text-[11px] text-lagoon-deep font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <button
                onClick={handleOpen}
                className="flex-1 max-w-[180px] py-3 px-5 rounded-full bg-lagoon-primary text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-lagoon-secondary hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </button>

              <button
                onClick={handleDownload}
                className="flex-1 max-w-[180px] py-3 px-5 rounded-full glass-panel text-lagoon-deep font-mono text-xs tracking-wider uppercase font-medium hover:bg-white hover:border-lagoon-primary/40 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4 text-lagoon-primary" />
                <span>DOWNLOAD PDF</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Full Resume Preview Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/40 backdrop-blur-md animate-in fade-in"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border border-lagoon-border text-lagoon-deep"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-lagoon-bg border border-lagoon-border text-lagoon-muted hover:text-lagoon-deep hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Resume Header */}
            <div className="border-b border-lagoon-border pb-6 mb-6">
              <h2 className="font-heading font-bold text-3xl text-lagoon-deep">{profile.fullName}</h2>
              <p className="font-mono text-xs text-lagoon-primary font-medium mt-1">
                {profile.role} · {profile.location}
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-lagoon-muted">
                <span>{profile.email}</span>
                <span>•</span>
                <span>{profile.phone}</span>
                <span>•</span>
                <span>github.com/{profile.github}</span>
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lagoon-primary mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </h3>
              <div className="p-4 rounded-xl bg-lagoon-bg/60 border border-lagoon-border flex justify-between items-baseline">
                <div>
                  <h4 className="font-semibold text-sm">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-xs text-lagoon-muted">SRM University-AP, Andhra Pradesh</p>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="text-lagoon-primary font-bold">CGPA: 8.6 / 10</span>
                  <span className="block text-lagoon-muted text-[11px]">2024 — Present</span>
                </div>
              </div>
            </div>

            {/* Key Experience */}
            <div className="mb-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lagoon-primary mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>EXPERIENCE & LABS</span>
              </h3>
              <div className="p-4 rounded-xl bg-lagoon-bg/60 border border-lagoon-border">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-semibold text-sm">Next Tech Lab (NTL) — Member</h4>
                  <span className="font-mono text-xs text-lagoon-muted">Feb 2026 — Present</span>
                </div>
                <ul className="text-xs text-lagoon-muted list-disc list-inside space-y-1">
                  <li>Contributing to AI/ML and full-stack development projects in a collaborative research lab.</li>
                  <li>Participating in hackathons, model deployment workshops, and peer technical reviews.</li>
                </ul>
              </div>
            </div>

            {/* Projects Overview */}
            <div className="mb-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lagoon-primary mb-3">
                NOTABLE PROJECTS
              </h3>
              <div className="space-y-3">
                {projects.slice(0, 4).map((p) => (
                  <div key={p.id} className="p-3.5 rounded-xl border border-lagoon-border bg-white">
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold text-xs text-lagoon-deep">{p.name} — {p.subtitle}</span>
                      <span className="font-mono text-[10px] text-lagoon-primary">{p.tech.join(" · ")}</span>
                    </div>
                    <p className="text-xs text-lagoon-muted mt-1">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lagoon-primary mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>HONORS & BENCHMARKS</span>
              </h3>
              <ul className="text-xs text-lagoon-muted space-y-1.5 list-disc list-inside">
                <li>2nd Runner-Up at the 9 Hacks Hackathon (Single 2D image to interactive 3D VR).</li>
                <li>Solved 120+ Data Structures & Algorithms challenges across LeetCode & CodeChef.</li>
                <li>Indexed 21,150+ plant knowledge documents in custom ChromaDB vector engine.</li>
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-lagoon-border">
              <button
                onClick={handleDownload}
                className="px-6 py-2.5 rounded-full bg-lagoon-primary text-white font-mono text-xs font-semibold hover:bg-lagoon-secondary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
