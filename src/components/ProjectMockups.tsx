import { useState, useRef } from "react";
import { 
  Search, ArrowRight, CheckCircle2, AlertTriangle, 
  Terminal, Camera, Cpu, Sparkles, Check, Database
} from "lucide-react";

// ==========================================
// 1. PLANTWISE MOCKUP
// ==========================================
export function PlantWiseMockup() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const sampleQueries = [
    {
      q: "Which plants grow best in black soil?",
      score: "0.942 similarity",
      answer: "Black soil retains calcium carbonate and moisture. Cotton, pigeon pea, and sunflower thrive with deep roots.",
    },
    {
      q: "Drought-resistant medicinal herbs for arid regions?",
      score: "0.968 similarity",
      answer: "Aloe barbadensis & Ashwagandha possess specialized CAM metabolism and taproots to retain hydration in heat.",
    },
    {
      q: "Companion plants that repel root nematodes naturally?",
      score: "0.951 similarity",
      answer: "French Marigolds exude alpha-terthienyl root exudates, which inhibits nematode reproduction by up to 88%.",
    },
  ];

  const current = sampleQueries[activeQueryIndex];

  return (
    <div className="w-full rounded-2xl glass-panel-subtle p-4 sm:p-5 flex flex-col gap-3.5 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-lagoon-primary" />
          <span className="font-mono text-[11px] tracking-wider uppercase font-semibold text-lagoon-deep">
            SEMANTIC VECTOR PIPELINE
          </span>
        </div>
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-lagoon-glow text-lagoon-primary border border-lagoon-accent/30 font-mono text-[10px] font-semibold">
          <Database className="w-3 h-3 text-lagoon-secondary" />
          <span>21,150+ DOCS</span>
        </div>
      </div>

      {/* Query Bar */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 border border-lagoon-border shadow-2xs">
        <Search className="w-3.5 h-3.5 text-lagoon-primary shrink-0" />
        <span className="text-xs font-medium text-lagoon-deep truncate">{current.q}</span>
      </div>

      {/* Query switcher pills */}
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-[10px] text-lagoon-muted">Try query:</span>
        {sampleQueries.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setActiveQueryIndex(idx);
            }}
            className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-all ${
              activeQueryIndex === idx
                ? "bg-lagoon-primary text-white border-lagoon-primary font-medium"
                : "bg-white/60 text-lagoon-muted border-lagoon-border hover:bg-white"
            }`}
          >
            #{idx + 1}
          </button>
        ))}
        <span className="ml-auto font-mono text-[10px] text-lagoon-primary font-medium">{current.score}</span>
      </div>

      {/* AI Answer Box */}
      <div className="p-3 rounded-xl bg-gradient-to-br from-white/90 to-lagoon-bg/80 border border-lagoon-accent/25 shadow-2xs">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Sparkles className="w-3 h-3 text-lagoon-accent" />
          <span className="font-mono text-[10px] font-semibold text-lagoon-primary uppercase tracking-wider">
            Gemini Botanical Context
          </span>
          <span className="ml-auto text-[9px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
            98.4% CONFIDENCE
          </span>
        </div>
        <p className="text-xs text-lagoon-deep leading-relaxed line-clamp-2">
          {current.answer}
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 2. TEACHMEWRONG MOCKUP
// ==========================================
export function TeachMeWrongMockup() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      role: "YOU",
      badge: "EXPLANATION",
      text: "All objects in a vacuum accelerate at the exact same rate (-9.8 m/s²), regardless of mass.",
    },
    {
      role: "AI",
      badge: "MISCONCEPTION",
      text: "Wait! A 100kg boulder is pulled by way more gravitational force than a marble, so it must fall faster!",
    },
    {
      role: "YOU",
      badge: "CORRECTING",
      text: "Gravitational force is higher, but a = F/m. Inertial mass cancels gravitational mass, yielding identical g!",
    },
    {
      role: "AI",
      badge: "MASTERY PROVEN",
      text: "Galileo equivalence principle confirmed! The boulder's inertia resists the stronger pull. Concept verified.",
    },
  ];

  return (
    <div className="w-full rounded-2xl glass-panel-subtle p-4 sm:p-5 flex flex-col gap-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-lagoon-deep">
            REVERSE-PEDAGOGY CHAT
          </span>
        </div>
        <span className="font-mono text-[10px] text-lagoon-primary bg-lagoon-glow px-2 py-0.5 rounded-full font-medium">
          STEP {step + 1} OF {steps.length}
        </span>
      </div>

      {/* Active Message Preview */}
      <div className="flex flex-col gap-2 min-h-[90px] justify-center">
        <div
          className={`p-3 rounded-xl border text-xs leading-relaxed transition-all ${
            step % 2 === 0
              ? "bg-lagoon-primary/10 border-lagoon-primary/30 text-lagoon-deep"
              : step === 3
              ? "bg-emerald-50 border-emerald-200 text-emerald-900"
              : "bg-amber-50 border-amber-200 text-amber-900"
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[10px] font-bold text-lagoon-primary uppercase">
              {steps[step].role}
            </span>
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/60 text-lagoon-deep uppercase font-semibold">
              {steps[step].badge}
            </span>
          </div>
          <p className="text-[11px] leading-relaxed">{steps[step].text}</p>
        </div>
      </div>

      {/* Stepper Controls */}
      <div className="flex items-center justify-between pt-2 border-t border-lagoon-border/60">
        <span className="font-mono text-[10px] text-lagoon-muted">Simulate debate turn:</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setStep((s) => (s + 1) % steps.length);
          }}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-lagoon-primary text-white font-mono text-[11px] font-medium hover:bg-lagoon-secondary"
        >
          <span>{step === steps.length - 1 ? "Reset Loop" : "Next Response"}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 3. TIMESENSEI MOCKUP
// ==========================================
export function TimeSenseiMockup() {
  const [selectedGesture, setSelectedGesture] = useState<"palm" | "thumbs" | "slouch">("palm");

  const gestureStates = {
    palm: {
      pose: "ERGONOMIC · UPRIGHT",
      gesture: "OPEN PALM DETECTED",
      action: "ACTION: TIMER PAUSED",
      latency: "22ms",
    },
    thumbs: {
      pose: "ERGONOMIC · UPRIGHT",
      gesture: "THUMBS UP RECOGNIZED",
      action: "ACTION: SESSION RESUMED",
      latency: "24ms",
    },
    slouch: {
      pose: "SPINAL DEVIATION > 18°",
      gesture: "NO HAND GESTURE",
      action: "NUDGE: POSTURE WARNING",
      latency: "28ms",
    },
  };

  const curr = gestureStates[selectedGesture];

  return (
    <div className="w-full rounded-2xl glass-panel-subtle p-4 sm:p-5 flex flex-col gap-3 select-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2">
        <div className="flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-lagoon-primary" />
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-lagoon-deep">
            ON-DEVICE VISION FEED
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-lagoon-muted">
          <span>60 FPS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-lagoon-primary font-medium">{curr.latency}</span>
        </div>
      </div>

      {/* Frame Preview */}
      <div className="relative aspect-[16/8] w-full rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center border border-lagoon-border">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#39B8B0_1px,transparent_1px)] [background-size:14px_14px]" />
        
        {/* Skeleton Wireframe */}
        <svg className="w-full h-full p-4 opacity-75 stroke-[#39B8B0] fill-none" viewBox="0 0 200 100">
          <circle cx="100" cy="25" r="10" strokeWidth="1.5" />
          <line x1="100" y1="35" x2="100" y2="70" strokeWidth="1.5" />
          <line x1="75" y1="42" x2="125" y2="42" strokeWidth="1.5" />
          <line x1="75" y1="42" x2="62" y2="60" strokeWidth="1.5" />
          <line x1="125" y1="42" x2="140" y2="30" strokeWidth="1.5" strokeDasharray={selectedGesture === "palm" ? "none" : "2 2"} />
          <circle cx="140" cy="30" r="3.5" fill="#39B8B0" />
        </svg>

        {/* Status badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 font-mono text-[9px]">
          <span className="bg-black/60 backdrop-blur-xs text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
            ● {curr.pose}
          </span>
        </div>

        <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg border border-white/20 font-mono text-[10px] flex items-center gap-1.5">
          <CheckCircle2 className="w-3 h-3 text-lagoon-accent" />
          <span>{curr.action}</span>
        </div>
      </div>

      {/* Gestures selector */}
      <div className="flex items-center justify-between gap-1 pt-1">
        <span className="font-mono text-[10px] text-lagoon-muted">Gesture:</span>
        <div className="flex gap-1.5">
          {(["palm", "thumbs", "slouch"] as const).map((g) => (
            <button
              key={g}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedGesture(g);
              }}
              className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase transition-all ${
                selectedGesture === g
                  ? "bg-lagoon-primary text-white font-medium"
                  : "bg-white/70 text-lagoon-muted border border-lagoon-border hover:bg-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. AIR DRAWING CANVAS MOCKUP
// ==========================================
export function AirDrawingMockup() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("#0B7285");

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
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
    e.stopPropagation();
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    setIsDrawing(false);
  };

  const clearCanvas = (e: React.MouseEvent) => {
    e.stopPropagation();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="w-full rounded-2xl glass-panel-subtle p-4 sm:p-5 flex flex-col gap-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2">
        <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-lagoon-deep">
          INTERACTIVE DRAWING PAD
        </span>
        <span className="font-mono text-[10px] text-lagoon-primary bg-lagoon-glow px-2 py-0.5 rounded-full font-bold">
          TOUCHLESS SIMULATOR
        </span>
      </div>

      {/* In-container Canvas */}
      <div className="relative rounded-xl bg-white border border-lagoon-border overflow-hidden">
        <canvas
          ref={canvasRef}
          width={280}
          height={95}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
          className="w-full h-[95px] cursor-crosshair bg-slate-50/80"
        />
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-white/90 border-t border-lagoon-border/50">
          <div className="flex items-center gap-1.5">
            {["#0B7285", "#39B8B0", "#E11D48"].map((c) => (
              <button
                key={c}
                onClick={(e) => {
                  e.stopPropagation();
                  setBrushColor(c);
                }}
                style={{ backgroundColor: c }}
                className={`w-3.5 h-3.5 rounded-full border ${brushColor === c ? "scale-125 border-slate-900" : "border-white"}`}
              />
            ))}
          </div>
          <span className="font-mono text-[9px] text-lagoon-muted">Drag cursor to sketch</span>
          <button
            onClick={clearCanvas}
            className="font-mono text-[10px] text-lagoon-muted hover:text-lagoon-deep"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. SINGLE PHOTO TO 3D VR MOCKUP
// ==========================================
export function Photo3DMockup() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="w-full rounded-2xl glass-panel-subtle p-4 sm:p-5 flex flex-col gap-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2">
        <span className="font-mono text-[11px] text-amber-800 uppercase tracking-wider font-semibold">
          🥈 9 HACKS 2ND RUNNER-UP
        </span>
        <span className="font-mono text-[10px] text-lagoon-primary bg-lagoon-glow px-2 py-0.5 rounded font-bold">
          VR INTEGRATED
        </span>
      </div>

      {/* 3D Depth Card Tilt */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="relative h-28 rounded-xl bg-gradient-to-tr from-lagoon-deep via-lagoon-primary to-lagoon-accent p-3.5 text-white flex flex-col justify-between overflow-hidden shadow-xs cursor-pointer"
      >
        <div className="flex items-center justify-between z-10">
          <span className="font-mono text-[9px] text-lagoon-accent font-semibold tracking-wider">
            POINT CLOUD / MONOCULAR DEPTH
          </span>
          <span className="font-mono text-[9px] bg-white/20 px-2 py-0.5 rounded-full">
            Three.js Mesh
          </span>
        </div>
        <div className="z-10 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-xs flex items-center justify-center font-mono text-[11px] font-bold">
            3D
          </div>
          <div>
            <span className="text-xs font-medium block">Interactive Parallax Mesh</span>
            <span className="font-mono text-[10px] text-white/70">48,200 Triangulated Vertices</span>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px]" />
      </div>
      <p className="font-mono text-[10px] text-lagoon-muted text-center">
        Move pointer over card to inspect spatial 3D parallax depth
      </p>
    </div>
  );
}

// ==========================================
// 6. KAAL-CHAKRA MOCKUP
// ==========================================
export function KaalChakraMockup() {
  const [pulsePin, setPulsePin] = useState<number>(1);

  const flowNodes = [
    { label: "WEB UI", detail: "WebSocket Client", step: "01" },
    { label: "ESP32 MCU", detail: "C++ Firmware", step: "02" },
    { label: "SENSORS", detail: "Hall Effect Array", step: "03" },
    { label: "BOARD", detail: "Physical Pieces", step: "04" },
  ];

  return (
    <div className="w-full rounded-2xl glass-panel-subtle p-4 sm:p-5 flex flex-col gap-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-lagoon-primary" />
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-lagoon-deep">
            CYBER-PHYSICAL IOT
          </span>
        </div>
        <span className="font-mono text-[10px] font-bold text-lagoon-primary bg-lagoon-glow px-2.5 py-0.5 rounded-full border border-lagoon-accent/30">
          HARDWARE + SOFTWARE
        </span>
      </div>

      {/* Schematic Nodes */}
      <div className="grid grid-cols-4 gap-1.5 my-1">
        {flowNodes.map((node, i) => {
          const isSelected = pulsePin === i + 1;
          return (
            <div
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setPulsePin(i + 1);
              }}
              className={`p-2 rounded-lg border cursor-pointer transition-all ${
                isSelected
                  ? "bg-white border-lagoon-primary shadow-xs"
                  : "bg-white/50 border-lagoon-border"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[9px] text-lagoon-primary font-bold">
                  {node.step}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-lagoon-accent animate-ping" : "bg-lagoon-border"}`} />
              </div>
              <h4 className="font-heading font-semibold text-[10px] text-lagoon-deep truncate">
                {node.label}
              </h4>
            </div>
          );
        })}
      </div>

      {/* Telemetry Monitor */}
      <div className="p-2.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-[10px] flex flex-col gap-1 border border-lagoon-primary/20">
        <div className="flex items-center justify-between text-slate-400 text-[9px]">
          <span>ESP32_TELEMETRY</span>
          <span className="text-emerald-400">PING &lt;65ms OK</span>
        </div>
        <div className="flex justify-between pt-0.5 text-slate-300">
          <span>HALL PIN: HIGH</span>
          <span className="text-lagoon-accent">SERVO: 92° LATCHED</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. CODEMENTOR.AI MOCKUP
// ==========================================
export function CodeMentorMockup() {
  const [fixed, setFixed] = useState(false);

  return (
    <div className="w-full rounded-2xl glass-panel-subtle p-4 sm:p-5 flex flex-col gap-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-2">
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-lagoon-primary" />
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-lagoon-deep">
            AST STATIC DEBUGGER
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setFixed(!fixed);
          }}
          className={`px-2 py-0.5 rounded font-mono text-[10px] font-medium transition-all ${
            fixed
              ? "bg-emerald-600 text-white"
              : "bg-lagoon-primary text-white hover:bg-lagoon-secondary"
          }`}
        >
          {fixed ? "✓ Fixed" : "⚡ Apply Fix"}
        </button>
      </div>

      {/* Code Snippet */}
      <div className="rounded-xl bg-[#0f172a] text-slate-200 p-2.5 font-mono text-[10px] leading-relaxed overflow-x-auto border border-slate-800">
        {!fixed ? (
          <div>
            <div><span className="text-purple-400">const</span> res = fetch(url); <span className="text-red-400">// Missing await</span></div>
            <div><span className="text-purple-400">return</span> res.json(); <span className="text-slate-500">// Runtime TypeError</span></div>
          </div>
        ) : (
          <div>
            <div><span className="text-purple-400">const</span> res = <span className="text-lagoon-accent font-bold">await</span> fetch(url);</div>
            <div><span className="text-purple-400">return</span> <span className="text-lagoon-accent font-bold">await</span> res.json();</div>
          </div>
        )}
      </div>

      {/* Diagnostic Alert */}
      <div className={`p-2 rounded-lg border text-[10px] flex items-center gap-2 ${
        fixed 
          ? "bg-emerald-50 border-emerald-200 text-emerald-900" 
          : "bg-amber-50 border-amber-200 text-amber-900"
      }`}>
        {fixed ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
        <span className="truncate">
          {fixed ? "AST Validated: Promise cleanly resolved inside boundary" : "Diagnostic: Unhandled asynchronous Promise return"}
        </span>
      </div>
    </div>
  );
}
