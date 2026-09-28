import { useState } from "react";
import { techStackCategories } from "../data/content";

export default function TechStack() {
  const [activeItem, setActiveItem] = useState<{ name: string; usedIn: string } | null>(null);

  return (
    <section className="relative py-24 md:py-32 border-t border-lagoon-border/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-lagoon-muted font-medium">
              CAPABILITIES & TOOLING
            </span>
          </div>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-lagoon-deep tracking-tight">
            TECHNOLOGIES I WORK WITH
          </h2>
          <p className="mt-2 text-sm sm:text-base text-lagoon-muted">
            Categorized tools, frameworks and algorithms I use to build real-world systems. Hover on any skill to inspect where it was implemented.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStackCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-3xl glass-panel border border-white/80 shadow-glass-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-lagoon-primary mb-4 block border-b border-lagoon-border/60 pb-2">
                  {group.category}
                </span>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => {
                    const isHovered = activeItem?.name === tech.name;
                    return (
                      <div
                        key={tech.name}
                        onMouseEnter={() => setActiveItem(tech)}
                        onMouseLeave={() => setActiveItem(null)}
                        className={`relative px-3 py-1.5 rounded-xl font-mono text-xs transition-all duration-200 cursor-pointer select-none ${
                          isHovered
                            ? "bg-lagoon-primary text-white shadow-xs -translate-y-0.5"
                            : "bg-white/80 text-lagoon-deep border border-lagoon-border/80 hover:border-lagoon-primary/40 hover:bg-white"
                        }`}
                      >
                        {tech.name}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Category Footer counter */}
              <div className="mt-6 pt-3 border-t border-lagoon-border/40 flex items-center justify-between text-[11px] font-mono text-lagoon-muted">
                <span>{group.items.length} tools</span>
                <span className="text-lagoon-accent font-semibold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Tooltip / Detail Banner when hovered */}
        <div className="mt-8 p-4 rounded-2xl glass-panel border border-lagoon-accent/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-lagoon-accent" />
            <span className="font-mono text-xs text-lagoon-deep">
              {activeItem ? (
                <>
                  <span className="font-bold text-lagoon-primary">{activeItem.name}:</span> Used in {activeItem.usedIn}
                </>
              ) : (
                <span className="text-lagoon-muted">Hover over any technology above to see exact project applications.</span>
              )}
            </span>
          </div>
          <span className="font-mono text-[10px] text-lagoon-muted uppercase tracking-wider hidden sm:inline">
            INSPECTOR ENGINE
          </span>
        </div>

      </div>
    </section>
  );
}
