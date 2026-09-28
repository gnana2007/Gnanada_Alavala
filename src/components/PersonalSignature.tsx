import { motion } from "framer-motion";

export default function PersonalSignature() {
  return (
    <div className="flex flex-col items-center justify-center py-10 select-none">
      {/* Signature SVG Container with Real-Time Stroke Draw Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative flex flex-col items-center"
      >
        <svg
          viewBox="0 0 280 85"
          className="w-56 sm:w-64 md:w-72 h-auto overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cursive handwritten stroke path for "Gnanada" */}
          {/* Capital G loop & ascender */}
          <motion.path
            d="M 38 48 C 30 42 22 28 32 18 C 42 8 56 14 52 30 C 48 48 30 65 18 64 C 10 63 15 52 28 50 C 40 48 46 54 54 54 C 60 54 62 48 66 42"
            stroke="#102A2E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Connected cursive letters: n - a - n - a - d - a */}
          <motion.path
            d="M 66 44 C 70 38 74 38 78 44 C 82 50 84 52 88 44 C 92 38 98 38 102 46 C 105 52 108 52 112 45 C 116 38 122 39 126 44 C 129 48 128 52 133 44 C 137 38 142 38 146 45 C 150 51 154 52 158 45 C 162 38 168 39 171 45 C 174 50 178 51 180 34 C 182 20 184 20 182 38 C 180 50 185 52 189 45 C 193 39 198 40 202 45 C 206 50 210 51 216 46"
            stroke="#102A2E"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Understated personal ink flourish underline */}
          <motion.path
            d="M 28 72 C 70 66 140 68 225 64 C 235 63 245 61 254 66"
            stroke="#0B7285"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="2 0"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          />
        </svg>

        {/* Handwritten text layer in Caveat for natural handwriting feel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-signature text-3xl sm:text-4xl text-[#102A2E] tracking-wide -mt-7 select-none pointer-events-none"
        >
          Gnanada
        </motion.div>

        {/* Minimal editorial label */}
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-lagoon-muted/70 mt-2 block"
        >
          — handwritten signature —
        </motion.span>
      </motion.div>
    </div>
  );
}
