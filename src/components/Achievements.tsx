import { achievements } from "../data/content";

export default function Achievements() {
  return (
    <section className="relative py-20 md:py-28 border-t border-lagoon-border/40 overflow-hidden bg-white/40">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        
        {/* Label */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-lagoon-muted font-medium">
            VERIFIED BENCHMARKS & STATS
          </span>
        </div>

        {/* Minimalist Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-white/80 shadow-glass-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-lagoon-deep tracking-tight block">
                  {item.metric}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-lagoon-primary font-semibold mt-2 block">
                  {item.label}
                </span>
              </div>
              <span className="text-[11px] text-lagoon-muted mt-4 block font-mono border-t border-lagoon-border/40 pt-2">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
