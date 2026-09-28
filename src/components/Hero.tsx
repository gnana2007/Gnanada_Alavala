import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cpu, Eye, Network, Layers, Sparkles, Terminal } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string>("ai");

  // Mouse tilt for interactive technical diagram
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const techNodes = [
    { id: "ai", label: "AI / LLMs", icon: Sparkles, x: "20%", y: "20%", desc: "Reverse-RAG & Embedding Workflows" },
    { id: "vector", label: "VECTOR SEARCH", icon: Network, x: "72%", y: "24%", desc: "21K+ ChromaDB Cosine Retrieval" },
    { id: "vision", label: "COMPUTER VISION", icon: Eye, x: "30%", y: "68%", desc: "MediaPipe & Gesture Inference" },
    { id: "hardware", label: "PHYSICAL COMPUTING", icon: Cpu, x: "75%", y: "72%", desc: "ESP32 Cyber-Physical Board Game" },
    { id: "fullstack", label: "SYSTEMS INTERACTION", icon: Layers, x: "48%", y: "45%", desc: "High-FPS Responsive Pipelines" },
  ];

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Editorial Uppercase Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary animate-pulse" />
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-lagoon-muted font-medium">
                CREATIVE ENGINEER / AI BUILDER
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight text-lagoon-deep uppercase"
            >
              I build intelligent
              <br />
              systems people
              <br />
              can interact with.
            </motion.h1>

            {/* Subtitle / Focus Areas */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-mono text-xs sm:text-sm md:text-base tracking-[0.12em] text-lagoon-primary font-medium mt-6 mb-4"
            >
              AI / ML · FULL STACK · COMPUTER VISION · IoT
            </motion.p>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-lagoon-muted leading-relaxed max-w-xl font-normal"
            >
              I turn unusual ideas into working software, intelligent systems and interactive prototypes.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mt-8 pt-2"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-lagoon-primary text-white font-mono text-xs md:text-sm tracking-wider uppercase font-medium hover:bg-lagoon-secondary hover:shadow-[0_8px_25px_rgba(11,114,133,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel text-lagoon-deep font-mono text-xs md:text-sm tracking-wider uppercase font-medium hover:border-lagoon-primary/30 hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 shadow-glass-sm"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-4 h-4 text-lagoon-primary" />
              </a>
            </motion.div>

            {/* Current Affiliation subtle note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center gap-3 text-xs font-mono text-lagoon-muted/80"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>SRM University-AP · B.Tech CSE (8.6 CGPA) · Next Tech Lab</span>
            </motion.div>

          </div>

          {/* Right Column: Abstract Interactive Technical Diagram Panel */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-[460px] aspect-[4/4.2] rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(11,114,133,0.08)] border border-white/80 overflow-hidden select-none cursor-pointer"
            >
              {/* Subtle technical background grid inside panel */}
              <div className="absolute inset-0 subtle-grid opacity-40 pointer-events-none" />

              {/* Panel Top Status */}
              <div className="relative z-10 flex items-center justify-between border-b border-lagoon-border pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-lagoon-primary" />
                  <span className="font-mono text-xs tracking-wider text-lagoon-deep uppercase font-medium">
                    SYSTEM_TOPOLOGY.SYS
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  <span className="font-mono text-[11px] text-lagoon-muted">ACTIVE</span>
                </div>
              </div>

              {/* Interactive Vector / Graph Canvas Area */}
              <div className="relative z-10 my-auto h-[260px] w-full">
                {/* SVG connection lines between nodes */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-lagoon-primary/20">
                  <line x1="20%" y1="20%" x2="48%" y2="45%" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="72%" y1="24%" x2="48%" y2="45%" strokeWidth="1.2" />
                  <line x1="30%" y1="68%" x2="48%" y2="45%" strokeWidth="1.2" />
                  <line x1="75%" y1="72%" x2="48%" y2="45%" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="20%" y1="20%" x2="72%" y2="24%" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
                </svg>

                {/* Nodes */}
                {techNodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeNode === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      onMouseEnter={() => setActiveNode(node.id)}
                      style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
                      className={`absolute group cursor-pointer transition-all duration-300 ${
                        isActive ? "scale-110 z-20" : "scale-100 z-10 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                          isActive
                            ? "bg-white text-lagoon-primary border-lagoon-accent shadow-md shadow-lagoon-accent/20"
                            : "bg-white/60 text-lagoon-muted border-lagoon-border hover:bg-white"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isActive ? "bg-lagoon-accent" : "bg-lagoon-primary/40"
                          }`}
                        />
                        <Icon className="w-3.5 h-3.5" />
                        <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">
                          {node.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Node Inspector Footer inside glass card */}
              <div className="relative z-10 pt-4 border-t border-lagoon-border bg-white/40 -mx-6 -mb-6 p-4 sm:p-5 rounded-b-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-widest text-lagoon-muted uppercase">
                      INSPECTOR NODE // {activeNode.toUpperCase()}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-lagoon-deep mt-0.5">
                      {techNodes.find((n) => n.id === activeNode)?.desc}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-lagoon-primary bg-lagoon-glow px-2.5 py-1 rounded-md">
                    REACTIVE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
