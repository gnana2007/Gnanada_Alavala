import { currentlyBuilding } from "../data/content";

export default function CurrentlyBuilding() {
  return (
    <section className="relative py-16 border-t border-lagoon-border/40 overflow-hidden bg-lagoon-bg/60">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/80 shadow-glass-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Left Title & Status Indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-700 font-bold block">
                CURRENTLY BUILDING
              </span>
              <span className="text-xs text-lagoon-muted">Live active focus areas in progress</span>
            </div>
          </div>

          {/* Focus Tags List */}
          <div className="flex flex-wrap items-center gap-2.5">
            {currentlyBuilding.map((item, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white/90 border border-lagoon-border/80 text-xs font-mono text-lagoon-deep shadow-2xs flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
