import { useState, useRef } from "react";
import { RefreshCw, Volume2 } from "lucide-react";

export default function Lab() {

  // State for Name -> Music
  const [inputText, setInputText] = useState("Gnanada");
  const [isPlayingNotes, setIsPlayingNotes] = useState(false);

  // Play pentatonic synth melody from string using Web Audio API
  const playNameMelody = (str: string) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      setIsPlayingNotes(true);

      const scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25]; // C major pentatonic
      const textToPlay = str.trim() || "Alpha";

      textToPlay.split("").forEach((char, i) => {
        const charCode = char.charCodeAt(0);
        const freq = scale[charCode % scale.length];
        const startTime = ctx.currentTime + i * 0.18;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.25, startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.38);
      });

      setTimeout(() => {
        setIsPlayingNotes(false);
      }, textToPlay.length * 180 + 400);
    } catch {
      setIsPlayingNotes(false);
    }
  };

  // State for Air Drawing Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("#0B7285");

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // State for RAG Cosine Slider
  const [ragSlider, setRagSlider] = useState<number>(75);

  // State for Autonomous Agent
  const [agentStep, setAgentStep] = useState<number>(0);
  const agentLogs = [
    { step: "01", action: "Goal Received", detail: "Decompose user query: 'Find drought-tolerant crop yields in alkaline soil'" },
    { step: "02", action: "Tool Call #1", detail: "chromadb.vector_query(filter={'soil': 'alkaline', 'trait': 'drought'})" },
    { step: "03", action: "Observation", detail: "3 chunks retrieved (Pennisetum glaucum, Sorghum bicolor)" },
    { step: "04", action: "Synthesis & Reflection", detail: "Formulate comparison matrix with verified yield references" },
  ];

  return (
    <section id="lab" className="relative py-24 md:py-36 bg-lagoon-bg/50 border-t border-lagoon-border/50">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        
        {/* Lab Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lagoon-accent animate-ping" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-lagoon-muted font-medium">
                INTERACTIVE SANDBOX
              </span>
            </div>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-lagoon-deep tracking-tight">
              THE LAB
            </h2>
            <p className="mt-2 text-base sm:text-lg text-lagoon-muted max-w-xl">
              Experiments, prototypes and ideas that started with &ldquo;What if?&rdquo;
            </p>
          </div>

          {/* Quick Stats on Experiments */}
          <div className="flex items-center gap-4 text-xs font-mono text-lagoon-muted bg-white/70 px-4 py-2 rounded-full border border-lagoon-border">
            <span>6 ACTIVE EXPERIMENTS</span>
            <span className="w-1 h-1 rounded-full bg-lagoon-primary" />
            <span className="text-lagoon-primary font-medium">CLIENT-SIDE INFERENCE</span>
          </div>
        </div>

        {/* Experiment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Name -> Music Synthesizer */}
          <div className="rounded-3xl glass-panel p-6 border border-white/80 shadow-glass-sm flex flex-col justify-between hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-lagoon-primary tracking-wider uppercase font-semibold">
                  CREATIVE AUDIO
                </span>
                <span className="font-mono text-[10px] text-lagoon-muted bg-lagoon-glow px-2 py-0.5 rounded">
                  WEB AUDIO API
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-lagoon-deep">
                Name → Music
              </h3>
              <p className="text-xs text-lagoon-muted mt-1 mb-5">
                Converts strings into harmonized pentatonic frequencies using ASCII character modulation.
              </p>

              {/* Interactive Audio Widget */}
              <div className="flex flex-col gap-3 p-3.5 rounded-2xl bg-white/80 border border-lagoon-border">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter any name..."
                  className="w-full px-3 py-2 rounded-xl text-xs font-mono bg-lagoon-bg border border-lagoon-border text-lagoon-deep focus:outline-none focus:border-lagoon-primary"
                  maxLength={16}
                />
                <button
                  onClick={() => playNameMelody(inputText)}
                  disabled={isPlayingNotes}
                  className="w-full py-2.5 rounded-xl bg-lagoon-primary text-white font-mono text-xs font-medium flex items-center justify-center gap-2 hover:bg-lagoon-secondary disabled:opacity-50 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isPlayingNotes ? "Synthesizing Notes..." : "Play Name Melody"}</span>
                </button>
              </div>
            </div>
            <span className="font-mono text-[10px] text-lagoon-muted mt-5 block text-right">
              EXP_01 // AUDIO_ALGO
            </span>
          </div>

          {/* Card 2: Air Drawing Canvas */}
          <div className="rounded-3xl glass-panel p-6 border border-white/80 shadow-glass-sm flex flex-col justify-between hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-lagoon-primary tracking-wider uppercase font-semibold">
                  COMPUTER VISION
                </span>
                <span className="font-mono text-[10px] text-lagoon-muted bg-lagoon-glow px-2 py-0.5 rounded">
                  CANVAS MATH
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-lagoon-deep">
                Air Drawing Canvas
              </h3>
              <p className="text-xs text-lagoon-muted mt-1 mb-5">
                Contactless index-finger tracking interface simulator. Draw freely on the interactive pad below.
              </p>

              {/* Canvas Area */}
              <div className="relative rounded-2xl bg-white border border-lagoon-border overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={280}
                  height={120}
                  onMouseDown={startDraw}
                  onMouseMove={draw}
                  onMouseUp={stopDraw}
                  onMouseLeave={stopDraw}
                  className="w-full h-[120px] cursor-crosshair bg-slate-50"
                />
                <div className="flex items-center justify-between p-2 bg-white/90 border-t border-lagoon-border/60">
                  <div className="flex items-center gap-1.5">
                    {["#0B7285", "#39B8B0", "#E11D48"].map((c) => (
                      <button
                        key={c}
                        onClick={() => setBrushColor(c)}
                        style={{ backgroundColor: c }}
                        className={`w-4 h-4 rounded-full border ${brushColor === c ? "scale-125 border-slate-900" : "border-white"}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={clearCanvas}
                    className="font-mono text-[10px] text-lagoon-muted hover:text-lagoon-deep"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
            <span className="font-mono text-[10px] text-lagoon-muted mt-5 block text-right">
              EXP_02 // GESTURE_SKETCH
            </span>
          </div>

          {/* Card 3: Single Photo to 3D VR (9 Hacks 2nd Runner Up) */}
          <div className="rounded-3xl glass-panel p-6 border border-white/80 shadow-glass-sm flex flex-col justify-between hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-amber-700 tracking-wider uppercase font-semibold">
                  🥈 9 HACKS 2ND RUNNER-UP
                </span>
                <span className="font-mono text-[10px] text-lagoon-primary bg-lagoon-glow px-2 py-0.5 rounded font-bold">
                  VR INTEGRATED
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-lagoon-deep">
                Single Photo → 3D Model
              </h3>
              <p className="text-xs text-lagoon-muted mt-1 mb-4">
                Generates depth meshes and point clouds from a single 2D image, exportable directly to interactive VR.
              </p>

              {/* 3D Depth Card Tilt Simulation */}
              <div className="group relative h-28 rounded-2xl bg-gradient-to-tr from-lagoon-deep via-lagoon-primary to-lagoon-accent p-4 text-white flex flex-col justify-between overflow-hidden shadow-xs cursor-pointer">
                <div className="flex items-center justify-between z-10">
                  <span className="font-mono text-[10px] text-lagoon-accent font-semibold tracking-wider">
                    DEPTH MAP ESTIMATOR
                  </span>
                  <span className="font-mono text-[10px] bg-white/20 px-2 py-0.5 rounded-full">
                    Z-AXIS 256
                  </span>
                </div>
                <div className="z-10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs flex items-center justify-center font-mono text-xs font-bold">
                    3D
                  </div>
                  <div>
                    <span className="text-xs font-medium block">Interactive Parallax Mesh</span>
                    <span className="font-mono text-[10px] text-white/70">Point cloud: 48,200 vertices</span>
                  </div>
                </div>
                {/* Visual grid in 3D card */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px]" />
              </div>
            </div>
            <span className="font-mono text-[10px] text-lagoon-muted mt-5 block text-right">
              EXP_03 // SPATIAL_AI
            </span>
          </div>

          {/* Card 4: RAG Vector Cosine Distance Inspector */}
          <div className="rounded-3xl glass-panel p-6 border border-white/80 shadow-glass-sm flex flex-col justify-between hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-lagoon-primary tracking-wider uppercase font-semibold">
                  AI / EMBEDDINGS
                </span>
                <span className="font-mono text-[10px] text-lagoon-muted bg-lagoon-glow px-2 py-0.5 rounded">
                  COSINE MATH
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-lagoon-deep">
                RAG Vector Inspector
              </h3>
              <p className="text-xs text-lagoon-muted mt-1 mb-4">
                Visualize how cosine similarity thresholds filter botanical token embeddings.
              </p>

              {/* Slider Widget */}
              <div className="flex flex-col gap-3 p-3.5 rounded-2xl bg-white/80 border border-lagoon-border">
                <div className="flex items-center justify-between font-mono text-xs text-lagoon-deep">
                  <span>Threshold: {(ragSlider / 100).toFixed(2)}</span>
                  <span className="text-lagoon-primary font-bold">
                    {ragSlider > 70 ? "High Precision" : "Broad Recall"}
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="95"
                  value={ragSlider}
                  onChange={(e) => setRagSlider(Number(e.target.value))}
                  className="w-full accent-lagoon-primary cursor-pointer"
                />
                <div className="p-2 rounded bg-lagoon-bg font-mono text-[11px] text-lagoon-muted flex justify-between">
                  <span>Vectors retrieved:</span>
                  <span className="text-lagoon-deep font-semibold">
                    {Math.round(21150 * Math.exp(-ragSlider / 25))} documents
                  </span>
                </div>
              </div>
            </div>
            <span className="font-mono text-[10px] text-lagoon-muted mt-5 block text-right">
              EXP_04 // VECTOR_SEARCH
            </span>
          </div>

          {/* Card 5: Kernel Convolution Simulator */}
          <div className="rounded-3xl glass-panel p-6 border border-white/80 shadow-glass-sm flex flex-col justify-between hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-lagoon-primary tracking-wider uppercase font-semibold">
                  COMPUTER VISION
                </span>
                <span className="font-mono text-[10px] text-lagoon-muted bg-lagoon-glow px-2 py-0.5 rounded">
                  SOBEL 3x3
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-lagoon-deep">
                Kernel Convolution
              </h3>
              <p className="text-xs text-lagoon-muted mt-1 mb-4">
                Interactive Sobel edge detection kernel applied over spatial gradient vectors.
              </p>

              {/* 3x3 Matrix Grid */}
              <div className="p-3 rounded-2xl bg-slate-900 text-white font-mono text-xs flex flex-col gap-2">
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1">
                  <span>HORIZONTAL SOBEL KERNEL</span>
                  <span className="text-lagoon-accent">Gx</span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-center font-bold">
                  <div className="bg-slate-800 py-1.5 rounded text-red-400">-1</div>
                  <div className="bg-slate-800 py-1.5 rounded text-slate-400">0</div>
                  <div className="bg-slate-800 py-1.5 rounded text-emerald-400">+1</div>
                  <div className="bg-slate-800 py-1.5 rounded text-red-400">-2</div>
                  <div className="bg-slate-800 py-1.5 rounded text-slate-400">0</div>
                  <div className="bg-slate-800 py-1.5 rounded text-emerald-400">+2</div>
                  <div className="bg-slate-800 py-1.5 rounded text-red-400">-1</div>
                  <div className="bg-slate-800 py-1.5 rounded text-slate-400">0</div>
                  <div className="bg-slate-800 py-1.5 rounded text-emerald-400">+1</div>
                </div>
              </div>
            </div>
            <span className="font-mono text-[10px] text-lagoon-muted mt-5 block text-right">
              EXP_05 // CONVOLUTION
            </span>
          </div>

          {/* Card 6: Autonomous Agent Step Loop */}
          <div className="rounded-3xl glass-panel p-6 border border-white/80 shadow-glass-sm flex flex-col justify-between hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-lagoon-primary tracking-wider uppercase font-semibold">
                  AI AGENTS
                </span>
                <span className="font-mono text-[10px] text-lagoon-muted bg-lagoon-glow px-2 py-0.5 rounded">
                  REACT LOOP
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-lagoon-deep">
                Autonomous Agent Loop
              </h3>
              <p className="text-xs text-lagoon-muted mt-1 mb-4">
                Simulates tool-calling decision trees with state tracking and self-reflection.
              </p>

              {/* Agent Step Display */}
              <div className="p-3.5 rounded-2xl bg-white/80 border border-lagoon-border flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-lagoon-primary font-bold">
                    STEP {agentLogs[agentStep].step}: {agentLogs[agentStep].action}
                  </span>
                  <button
                    onClick={() => setAgentStep((s) => (s + 1) % agentLogs.length)}
                    className="p-1 rounded hover:bg-lagoon-bg text-lagoon-primary"
                    title="Next Step"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="font-mono text-[11px] text-lagoon-deep leading-relaxed bg-lagoon-bg/70 p-2 rounded-lg">
                  {agentLogs[agentStep].detail}
                </p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-lagoon-muted mt-5 block text-right">
              EXP_06 // AGENT_SYSTEMS
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
