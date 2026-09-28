import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<"initializing" | "ready" | "transforming" | "complete">("initializing");
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Full name for letter-by-letter handwriting as the sole central identity
  const signatureLetters = Array.from("Gnanada Alavala");

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      // Graceful dissolve for users who prefer reduced motion
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  // Luxurious, Extended Choreography with Letter-by-Letter Handwriting & Slow Metamorphosis (~8.4s)
  useEffect(() => {
    // 1. Smooth progress counter from 0 to 100% across 4.9 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + 1, 100);
      });
    }, 49); // 49ms * 100 = 4900ms

    // 2. At 4.9s: Signature letters finish writing; status transforms smoothly to READY
    const readyTimer = setTimeout(() => {
      setPhase("ready");
    }, 4900);

    // 3. At 6.0s: Initiate the slow, unhurried transformation into the portfolio
    // (Gives a full 1.1s calm moment to admire the complete cursive signature & READY state)
    const transformTimer = setTimeout(() => {
      setPhase("transforming");
    }, 6000);

    // 4. At 7.6s: Transformation fully dissolves into homepage; unmount preloader
    // (1.6 seconds of slow, silky, organic-to-digital transition)
    const completeTimer = setTimeout(() => {
      setPhase("complete");
      onComplete();
    }, 7600);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(readyTimer);
      clearTimeout(transformTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Subtle Desktop Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalized offset from -1 to 1
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleSkip = () => {
    setPhase("transforming");
    setTimeout(() => {
      setPhase("complete");
      onComplete();
    }, 450);
  };

  const isTransforming = phase === "transforming" || phase === "complete";

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 1 }}
      animate={{
        opacity: isTransforming ? 0 : 1,
      }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 overflow-hidden bg-[#F5FAFA] select-none flex flex-col justify-between"
      style={{
        backgroundColor: "#F5FAFA", // Exact match with portfolio canvas: ZERO color variance
      }}
    >
      {/* Soft Glass Lagoon Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft pale aqua & seafoam ambient lagoon pools */}
        <motion.div
          animate={{
            opacity: isTransforming ? 0.2 : 0.45,
            scale: isTransforming ? 1.08 : 1,
          }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-[140px] transition-transform duration-1000 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(57, 184, 176, 0.18) 0%, rgba(11, 114, 133, 0.06) 50%, transparent 80%)",
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
          }}
        />
        <motion.div
          animate={{
            opacity: isTransforming ? 0.2 : 0.4,
            scale: isTransforming ? 1.08 : 1,
          }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute top-[35%] -right-[12%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full blur-[150px] transition-transform duration-1000 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(20, 145, 155, 0.15) 0%, rgba(57, 184, 176, 0.05) 60%, transparent 80%)",
            transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -14}px, 0)`,
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[25%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[130px] opacity-35"
          style={{
            background: "radial-gradient(circle, rgba(11, 114, 133, 0.14) 0%, rgba(57, 184, 176, 0.04) 70%, transparent 80%)",
          }}
        />

        {/* Subtle Cursor Reactive Seafoam Spotlight */}
        <div
          className="fixed rounded-full pointer-events-none transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${(mousePos.x + 1) * 0.5 * (typeof window !== "undefined" ? window.innerWidth : 1000) - 180}px, ${(mousePos.y + 1) * 0.5 * (typeof window !== "undefined" ? window.innerHeight : 800) - 180}px, 0)`,
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, rgba(57, 184, 176, 0.08) 0%, rgba(11, 114, 133, 0.02) 45%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />

        {/* Delicate Base Grid matching portfolio */}
        <div className="absolute inset-0 subtle-grid opacity-50" />
      </div>

      {/* Top Header Row with Skip Button */}
      <motion.div
        animate={{
          opacity: isTransforming ? 0 : 1,
          y: isTransforming ? -10 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full px-6 md:px-12 pt-6 md:pt-8 flex items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-[10px] tracking-[0.28em] uppercase text-lagoon-muted"
        >
          SYS // PORTFOLIO.CORE
        </motion.div>

        {/* Understated SKIP button */}
        <button
          onClick={handleSkip}
          type="button"
          className="group flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] text-lagoon-muted hover:text-lagoon-primary px-3.5 py-1.5 rounded-full border border-lagoon-border/40 hover:border-lagoon-primary/30 bg-white/40 hover:bg-white/70 backdrop-blur-xs transition-all duration-300"
          aria-label="Skip entrance animation"
        >
          <span>SKIP</span>
          <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
            &rarr;
          </span>
        </button>
      </motion.div>

      {/* ========================================================
          SVG CANVAS: NATURE + GLASS + DIGITAL STRUCTURE
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Translucent Glass Gradients */}
            <linearGradient id="glassLeafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#39B8B0" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0B7285" stopOpacity="0.08" />
            </linearGradient>

            <linearGradient id="glassLeafGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#557174" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#39B8B0" stopOpacity="0.06" />
            </linearGradient>

            <linearGradient id="glassStemGradLeft" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#0B7285" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#39B8B0" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#14919B" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="glassStemGradRight" x1="100%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#102A2E" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#39B8B0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B7285" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="ribbonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#39B8B0" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
            </linearGradient>

            {/* Subtle Glass Depth Filter */}
            <filter id="glassBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>

          {/* ========================================================
              LEFT BOTANICAL & GLASS CLUSTER (Emerging from bottom-left)
              Slow, soft attenuation during transformation
              ======================================================== */}
          <motion.g
            animate={{
              opacity: isTransforming ? 0 : 1,
              filter: isTransforming ? "blur(5px)" : "blur(0px)",
              scale: isTransforming ? 1.03 : 1,
            }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 8}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* 0.8s: Main Primary Organic Stem */}
            <motion.path
              d="M 60 920 C 130 760 90 600 170 450 C 230 330 190 200 240 80"
              stroke="url(#glassStemGradLeft)"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 1.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* 1.8s: Secondary Branch */}
            <motion.path
              d="M 140 540 C 210 470 290 490 320 400 C 340 340 300 280 340 220"
              stroke="url(#glassStemGradLeft)"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.5, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Tertiary lower twig */}
            <motion.path
              d="M 100 720 C 180 690 230 740 290 710"
              stroke="url(#glassStemGradLeft)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 1.3, delay: 2.1, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* 1.5s: Translucent Glass Leaf 1 (Mid-lower) */}
            <motion.path
              d="M 155 480 C 190 430 250 440 280 475 C 240 510 185 520 155 480 Z"
              fill="url(#glassLeafGrad1)"
              stroke="rgba(11, 114, 133, 0.25)"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 0.85, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Leaf 1 Delicate Spine Vein & Specular Glass Highlight */}
            <motion.path
              d="M 157 480 Q 215 470 278 476"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="0.9"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.0, delay: 1.8 }}
            />

            {/* 2.3s: Translucent Glass Leaf 2 (Upper branch) */}
            <motion.path
              d="M 215 280 C 265 240 310 260 325 310 C 275 330 235 320 215 280 Z"
              fill="url(#glassLeafGrad2)"
              stroke="rgba(57, 184, 176, 0.35)"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 1.2, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M 218 282 Q 270 285 322 308"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.0, delay: 2.55 }}
            />

            {/* 2.7s: Translucent Glass Leaf 3 (Outer tip) */}
            <motion.path
              d="M 235 120 C 270 80 320 95 330 135 C 290 150 255 145 235 120 Z"
              fill="url(#glassLeafGrad1)"
              stroke="rgba(11, 114, 133, 0.2)"
              strokeWidth="0.9"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 0.75, scale: 1 }}
              transition={{ duration: 1.1, delay: 2.7 }}
            />

            {/* Flowing Translucent Glass Ribbon */}
            <motion.path
              d="M 30 840 C 120 720 70 510 190 410 C 290 320 220 180 310 90"
              stroke="url(#ribbonGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              style={{ filter: "url(#glassBlur)" }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.45 }}
              transition={{ duration: 2.2, delay: 1.6, ease: "easeInOut" }}
            />
          </motion.g>

          {/* ========================================================
              RIGHT BOTANICAL & GLASS CLUSTER (Emerging from bottom-right)
              Slow, soft attenuation during transformation
              ======================================================== */}
          <motion.g
            animate={{
              opacity: isTransforming ? 0 : 1,
              filter: isTransforming ? "blur(5px)" : "blur(0px)",
              scale: isTransforming ? 1.03 : 1,
            }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -8}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* 0.9s: Main Primary Organic Stem Right */}
            <motion.path
              d="M 1380 930 C 1310 770 1350 590 1270 440 C 1200 310 1240 180 1190 70"
              stroke="url(#glassStemGradRight)"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 1.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* 1.9s: Secondary Branch Right */}
            <motion.path
              d="M 1300 520 C 1220 450 1140 480 1110 380 C 1085 310 1130 250 1090 180"
              stroke="url(#glassStemGradRight)"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.5, delay: 1.9, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Lower branch right */}
            <motion.path
              d="M 1340 700 C 1260 670 1210 720 1150 680"
              stroke="url(#glassStemGradRight)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 1.3, delay: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* 1.6s: Translucent Glass Leaf Right 1 */}
            <motion.path
              d="M 1285 470 C 1250 420 1190 430 1160 465 C 1200 500 1255 510 1285 470 Z"
              fill="url(#glassLeafGrad2)"
              stroke="rgba(11, 114, 133, 0.25)"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 0.85, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M 1283 470 Q 1225 460 1162 466"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="0.9"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.0, delay: 1.9 }}
            />

            {/* 2.4s: Translucent Glass Leaf Right 2 */}
            <motion.path
              d="M 1225 270 C 1175 230 1130 250 1115 300 C 1165 320 1205 310 1225 270 Z"
              fill="url(#glassLeafGrad1)"
              stroke="rgba(57, 184, 176, 0.35)"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 1.2, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M 1222 272 Q 1170 275 1118 298"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.0, delay: 2.65 }}
            />

            {/* Translucent Glass Ribbon Right */}
            <motion.path
              d="M 1410 830 C 1320 710 1370 500 1250 400 C 1150 310 1220 170 1130 80"
              stroke="url(#ribbonGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ filter: "url(#glassBlur)" }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2.2, delay: 1.7, ease: "easeInOut" }}
            />
          </motion.g>

          {/* ========================================================
              2.8s - 3.4s: DIGITAL GEOMETRY & TECHNICAL NODES
              Aligning and slowly dissolving into homepage grid
              ======================================================== */}
          <g
            style={{
              transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 5}px, 0)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Left Geometric Guides & Nodes (Kept on left perimeter with ample center space) */}
            <motion.circle
              cx="320"
              cy="400"
              r="24"
              stroke="rgba(11, 114, 133, 0.22)"
              strokeWidth="0.9"
              strokeDasharray="3 3"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: isTransforming ? 0 : 1,
                scale: isTransforming ? 1.15 : 1,
              }}
              transition={{ duration: isTransforming ? 1.0 : 1.0, delay: isTransforming ? 0 : 2.8 }}
            />
            <motion.circle
              cx="320"
              cy="400"
              r="2.5"
              fill="#0B7285"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransforming ? 0 : 0.9 }}
              transition={{ duration: isTransforming ? 0.8 : 0.7, delay: isTransforming ? 0 : 2.9 }}
            />
            {/* Connecting technical bridging line (shorter to leave center completely open) */}
            <motion.line
              x1="320"
              y1="400"
              x2="385"
              y2="400"
              stroke="rgba(57, 184, 176, 0.3)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                opacity: isTransforming ? 0 : 1,
              }}
              transition={{ duration: isTransforming ? 0.8 : 0.9, delay: isTransforming ? 0 : 3.0 }}
            />
            <motion.text
              x="395"
              y="404"
              fill="#557174"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              letterSpacing="0.2em"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransforming ? 0 : 0.75 }}
              transition={{ duration: isTransforming ? 0.6 : 0.7, delay: isTransforming ? 0 : 3.15 }}
            >
              SYS.01 // INTELLIGENCE
            </motion.text>

            {/* Left Node Upper */}
            <motion.circle
              cx="240"
              cy="80"
              r="2"
              fill="#39B8B0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransforming ? 0 : 0.8 }}
              transition={{ duration: isTransforming ? 0.6 : 0.7, delay: isTransforming ? 0 : 2.9 }}
            />
            <motion.circle
              cx="240"
              cy="80"
              r="12"
              stroke="rgba(57, 184, 176, 0.2)"
              strokeWidth="0.75"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransforming ? 0 : 0.7 }}
              transition={{ duration: isTransforming ? 0.8 : 0.8, delay: isTransforming ? 0 : 3.0 }}
            />

            {/* Right Geometric Guides & Nodes */}
            <motion.circle
              cx="1110"
              cy="380"
              r="28"
              stroke="rgba(11, 114, 133, 0.22)"
              strokeWidth="0.9"
              strokeDasharray="3 3"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: isTransforming ? 0 : 1,
                scale: isTransforming ? 1.15 : 1,
              }}
              transition={{ duration: isTransforming ? 1.0 : 1.0, delay: isTransforming ? 0 : 2.9 }}
            />
            <motion.circle
              cx="1110"
              cy="380"
              r="2.5"
              fill="#0B7285"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransforming ? 0 : 0.9 }}
              transition={{ duration: isTransforming ? 0.8 : 0.7, delay: isTransforming ? 0 : 3.0 }}
            />
            <motion.line
              x1="1110"
              y1="380"
              x2="1045"
              y2="380"
              stroke="rgba(57, 184, 176, 0.3)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                opacity: isTransforming ? 0 : 1,
              }}
              transition={{ duration: isTransforming ? 0.8 : 0.9, delay: isTransforming ? 0 : 3.1 }}
            />
            <motion.text
              x="940"
              y="384"
              fill="#557174"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              letterSpacing="0.2em"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransforming ? 0 : 0.75 }}
              transition={{ duration: isTransforming ? 0.6 : 0.7, delay: isTransforming ? 0 : 3.25 }}
            >
              SYS.02 // ARCHITECTURE
            </motion.text>

            {/* Right Node Upper */}
            <motion.circle
              cx="1190"
              cy="70"
              r="2"
              fill="#39B8B0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransforming ? 0 : 0.8 }}
              transition={{ duration: isTransforming ? 0.6 : 0.7, delay: isTransforming ? 0 : 3.0 }}
            />
            <motion.circle
              cx="1190"
              cy="70"
              r="14"
              stroke="rgba(57, 184, 176, 0.2)"
              strokeWidth="0.75"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransforming ? 0 : 0.7 }}
              transition={{ duration: isTransforming ? 0.8 : 0.8, delay: isTransforming ? 0 : 3.1 }}
            />

            {/* Aligning Technical Grid Axes: Softly illuminate and dissolve during transformation */}
            <motion.line
              x1="120"
              y1="750"
              x2="1320"
              y2="750"
              stroke="rgba(11, 114, 133, 0.12)"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isTransforming ? [0.18, 0.35, 0] : 0.18,
              }}
              transition={{ duration: isTransforming ? 1.6 : 1.2, delay: isTransforming ? 0 : 3.4 }}
            />
            <motion.line
              x1="720"
              y1="80"
              x2="720"
              y2="840"
              stroke="rgba(11, 114, 133, 0.1)"
              strokeWidth="1"
              strokeDasharray="3 6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isTransforming ? [0.15, 0.3, 0] : 0.15,
              }}
              transition={{ duration: isTransforming ? 1.6 : 1.2, delay: isTransforming ? 0 : 3.4 }}
            />
          </g>
        </svg>
      </div>

      {/* ========================================================
          CENTER: MINIMALIST FOCAL IDENTITY
          SOLE IDENTITY: CURSIVE SIGNATURE "Gnanada Alavala" + STATUS + PROGRESS
          (No duplicate uppercase name; signature is the refined focal center)
          ======================================================== */}
      <motion.div
        animate={{
          opacity: isTransforming ? 0 : 1,
          y: isTransforming ? -22 : 0,
          filter: isTransforming ? "blur(3px)" : "blur(0px)",
        }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-30 my-auto flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Subtle glass disc highlight behind the cursive signature */}
        <div
          className="absolute w-[360px] sm:w-[500px] h-[260px] sm:h-[300px] rounded-full blur-[45px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.92) 0%, rgba(57, 184, 176, 0.09) 50%, transparent 80%)",
          }}
        />

        {/* 2.8s - 4.6s: HANDWRITTEN CURSIVE SIGNATURE "Gnanada Alavala"
            Letters write themselves ONE BY ONE, serving as the sole elegant focal center */}
        <div className="relative my-3 sm:my-4 min-h-[56px] sm:min-h-[70px] flex flex-col items-center justify-center">
          <span className="font-signature text-4xl sm:text-5xl md:text-[3.5rem] text-lagoon-deep tracking-wide leading-none inline-flex items-baseline transform -rotate-1 drop-shadow-xs">
            {signatureLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 7, scale: 0.88, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.28,
                  delay: 2.8 + index * 0.11,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </div>

        {/* Status: INITIALIZING -> READY at 5.5s */}
        <div className="flex items-center gap-2 h-6 my-1">
          <motion.span
            animate={{
              scale: phase === "ready" || isTransforming ? [1, 1.35, 1] : 1,
              backgroundColor: phase === "ready" || isTransforming ? "#39B8B0" : "#557174",
            }}
            transition={{ duration: 0.4 }}
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{
              boxShadow: phase === "ready" || isTransforming ? "0 0 10px rgba(57, 184, 176, 0.8)" : "none",
            }}
          />

          <AnimatePresence mode="wait">
            {phase === "initializing" ? (
              <motion.span
                key="init"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.25 }}
                className="font-mono text-[11px] tracking-[0.25em] text-lagoon-muted uppercase"
              >
                INITIALIZING
              </motion.span>
            ) : (
              <motion.span
                key="ready"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="font-mono text-[11px] tracking-[0.25em] text-lagoon-primary font-semibold uppercase"
              >
                READY
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Very Thin Horizontal Progress Indicator (reaches 100% at 5.3s) */}
        <div className="w-36 sm:w-48 h-[1.5px] bg-lagoon-border/30 rounded-full overflow-hidden mt-3 relative">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(to right, #39B8B0, #0B7285)",
              boxShadow: "0 0 6px rgba(57, 184, 176, 0.4)",
            }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Bottom Footer Row: Replaced biotech/nature text with Systems & Intelligence */}
      <motion.div
        animate={{
          opacity: isTransforming ? 0 : 1,
          y: isTransforming ? 10 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full px-6 md:px-12 pb-6 md:pb-8 flex items-center justify-between text-lagoon-muted/70 font-mono text-[10px] tracking-[0.22em] uppercase"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          SYSTEMS &middot; INTELLIGENCE &middot; ARCHITECTURE
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          &copy; 2026
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
