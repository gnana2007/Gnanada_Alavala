import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden border-t border-lagoon-border/40">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Label Column */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-28 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-lagoon-muted font-medium">
                ABOUT THE BUILDER
              </span>
            </motion.div>
          </div>

          {/* Large Editorial Statement */}
          <div className="lg:col-span-9 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.45] md:leading-[1.5] text-lagoon-deep tracking-normal"
            >
              I enjoy turning ideas that sound slightly unusual into things that actually work.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-lg sm:text-xl text-lagoon-muted leading-relaxed font-normal"
            >
              My work sits at the intersection of AI, full-stack engineering, computer vision, and physical interaction.
              Whether training on-device gesture models, designing vector knowledge engines, or orchestrating hardware sensors, I focus on building tangible tools with tight feedback loops.
            </motion.p>

            {/* Quick Core Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-lagoon-border/60"
            >
              <div>
                <span className="font-mono text-[11px] text-lagoon-primary tracking-widest uppercase block">01 / APPLIED AI</span>
                <span className="text-sm font-medium text-lagoon-deep mt-1 block">RAG & Embeddings</span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-lagoon-primary tracking-widest uppercase block">02 / INTERACTION</span>
                <span className="text-sm font-medium text-lagoon-deep mt-1 block">Computer Vision</span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-lagoon-primary tracking-widest uppercase block">03 / FULL STACK</span>
                <span className="text-sm font-medium text-lagoon-deep mt-1 block">Modern Web Engines</span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-lagoon-primary tracking-widest uppercase block">04 / HARDWARE</span>
                <span className="text-sm font-medium text-lagoon-deep mt-1 block">IoT & Microcontrollers</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
