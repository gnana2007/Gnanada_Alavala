import { motion } from "framer-motion";

export default function PersonalSignature() {
  const signatureName = "Gnanada Alavala";
  const letters = Array.from(signatureName);

  return (
    <div className="flex flex-col items-center justify-center py-6 select-none">
      {/* Refined Glassmorphic Signature Plaque */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative px-8 sm:px-12 py-6 rounded-3xl glass-panel border border-white/90 shadow-[0_10px_30px_rgba(11,114,133,0.06)] flex flex-col items-center justify-center group hover:border-lagoon-primary/20 transition-all duration-300"
      >
        {/* Natural, Understandable Cursive Signature writing letter by letter */}
        <div className="relative text-center">
          <span className="font-signature text-4xl sm:text-5xl md:text-[3.25rem] text-lagoon-deep tracking-wide leading-none inline-flex items-baseline transform -rotate-1 hover:rotate-0 transition-transform duration-300 drop-shadow-xs">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 7, scale: 0.9, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.2 + index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>

          {/* Understated animated ink flourish underline */}
          <svg
            viewBox="0 0 320 24"
            className="w-full max-w-[280px] sm:max-w-[320px] h-4 mt-1 overflow-visible mx-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 8 12 Q 100 18 200 11 T 312 14"
              stroke="#0B7285"
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.75 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.45, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
