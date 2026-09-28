import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import type { Project, ProjectCategory } from "../data/content";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("ALL");

  const categories: ProjectCategory[] = [
    "ALL",
    "AI / ML",
    "COMPUTER VISION",
    "FULL STACK",
    "HARDWARE",
    "EXPERIMENTS",
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "ALL") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="work" className="relative py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-lagoon-muted font-medium">
                PORTFOLIO WORK
              </span>
            </div>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-lagoon-deep tracking-tight">
              SELECTED PROJECTS
            </h2>
            <p className="mt-2 text-base sm:text-lg text-lagoon-muted max-w-xl">
              Systems, intelligent prototypes and interactive hardware. Click any container to inspect detailed architecture & engineering decisions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase transition-all duration-300 ${
                    active
                      ? "bg-lagoon-primary text-white shadow-xs font-semibold"
                      : "bg-white/70 text-lagoon-muted border border-lagoon-border hover:bg-white hover:text-lagoon-deep"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Container Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full flex flex-col"
              >
                <ProjectCard
                  project={project}
                  onOpenCaseStudy={onSelectProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
