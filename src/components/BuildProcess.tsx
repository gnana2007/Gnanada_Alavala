import { motion } from "framer-motion";
import { buildSteps } from "../data/content";

export default function BuildProcess() {
  return (
    <section className="relative py-24 md:py-36 border-t border-lagoon-border/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-lagoon-muted font-medium">
              METHODOLOGY
            </span>
          </div>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-lagoon-deep tracking-tight">
            HOW I BUILD
          </h2>
          <p className="mt-2 text-base text-lagoon-muted">
            From the initial question to a production-ready, interactive system.
          </p>
        </div>

        {/* Vertical Timeline Progression */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-8 w-[1.5px] bg-gradient-to-b from-lagoon-primary via-lagoon-accent to-lagoon-border" />

          <div className="flex flex-col gap-10 sm:gap-12">
            {buildSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group"
              >
                {/* Timeline Step Circle */}
                <div className="relative z-10 w-16 h-16 rounded-2xl glass-panel border border-lagoon-primary/20 flex items-center justify-center shrink-0 group-hover:bg-lagoon-primary group-hover:text-white transition-all duration-300 shadow-glass-sm">
                  <span className="font-mono text-base font-bold text-lagoon-primary group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl glass-panel p-6 sm:p-8 border border-white/80 shadow-glass-sm group-hover:border-lagoon-primary/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-xl sm:text-2xl text-lagoon-deep tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <span className="font-mono text-xs text-lagoon-primary font-medium">
                      {step.question}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-lagoon-muted leading-relaxed font-normal mt-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
