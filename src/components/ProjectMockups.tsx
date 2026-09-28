import { useState } from "react";
import { 
  Search, ArrowRight, CheckCircle2, AlertTriangle, 
  Terminal, Camera, RefreshCw, Cpu, Sparkles, Check, Database
} from "lucide-react";

// ==========================================
// 1. PLANTWISE MOCKUP
// ==========================================
export function PlantWiseMockup() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const sampleQueries = [
    {
      q: "Which plants grow best in black soil?",
      topMatch: "Gossypium hirsutum (Cotton) & Cajanus cajan",
      score: "0.942 similarity",
      answer: "Black soil (Regur) retains high moisture and calcium carbonate. Cotton, pigeon pea, and sunflower thrive due to deep root penetration and nutrient density.",
    },
    {
      q: "Drought-resistant medicinal herbs for arid regions?",
      topMatch: "Aloe barbadensis & Withania somnifera",
      score: "0.968 similarity",
      answer: "Aloe vera and Ashwagandha possess specialized crassulacean acid metabolism (CAM) and deep taproots to store hydration in extreme heat.",
    },
    {
      q: "Companion plants that repel root nematodes naturally?",
      topMatch: "Tagetes patula (French Marigold)",
      score: "0.951 similarity",
      answer: "French Marigolds exude alpha-terthienyl through root exudates, which inhibits nematode reproduction by up to 88% in surrounding soil.",
    },
  ];

  const current = sampleQueries[activeQueryIndex];

  return (
    <div className="w-full rounded-2xl glass-panel p-5 sm:p-7 border border-white/80 shadow-glass-sm flex flex-col gap-5">
      {/* Top Header & 21,150+ Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-lagoon-border/70 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-lagoon-primary" />
          <span className="font-mono text-xs tracking-wider uppercase font-semibold text-lagoon-deep">
            BOTANICAL SEMANTIC PIPELINE
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lagoon-glow text-lagoon-primary border border-lagoon-accent/30 font-mono text-xs font-semibold">
          <Database className="w-3.5 h-3.5 text-lagoon-secondary" />
          <span>21,150+ DOCUMENTS INDEXED</span>
        </div>
      </div>

      {/* Query Bar */}
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[11px] uppercase tracking-wider text-lagoon-muted">
          Natural Language Query Input
        </label>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/90 border border-lagoon-border shadow-xs">
          <Search className="w-4 h-4 text-lagoon-primary shrink-0" />
          <span className="text-sm font-medium text-lagoon-deep truncate">{current.q}</span>
        </div>
        
        {/* Sample queries pills */}
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span className="font-mono text-[10px] text-lagoon-muted">Try sample:</span>
          {sampleQueries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveQueryIndex(idx)}
              className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border transition-all ${
                activeQueryIndex === idx
                  ? "bg-lagoon-primary text-white border-lagoon-primary font-medium"
                  : "bg-white/60 text-lagoon-muted border-lagoon-border hover:bg-white"
              }`}
            >
              #{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 4-Step Diagram Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-1">
        <div className="p-3 rounded-xl bg-white/60 border border-lagoon-border/80 flex flex-col justify-between">
          <span className="font-mono text-[10px] text-lagoon-primary uppercase tracking-wider">01 / ENCODER</span>
          <p className="text-xs font-medium text-lagoon-deep mt-1">Sentence Transformers</p>
          <span className="font-mono text-[10px] text-lagoon-muted mt-2">768-dim vector space</span>
        </div>

        <div className="p-3 rounded-xl bg-white/60 border border-lagoon-border/80 flex flex-col justify-between">
          <span className="font-mono text-[10px] text-lagoon-secondary uppercase tracking-wider">02 / RETRIEVAL</span>
          <p className="text-xs font-medium text-lagoon-deep mt-1">ChromaDB Cosine</p>
          <span className="font-mono text-[10px] text-lagoon-primary font-medium mt-2">{current.score}</span>
        </div>

        <div className="p-3 rounded-xl bg-white/60 border border-lagoon-border/80 flex flex-col justify-between">
          <span className="font-mono text-[10px] text-lagoon-accent uppercase tracking-wider">03 / SYNTHESIS</span>
          <p className="text-xs font-medium text-lagoon-deep mt-1">Gemini Knowledge RAG</p>
          <span className="font-mono text-[10px] text-lagoon-muted mt-2">Source Grounded</span>
        </div>
      </div>

      {/* AI Generated Answer Box */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-white/90 to-lagoon-bg/80 border border-lagoon-accent/25 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-lagoon-accent" />
          <span className="font-mono text-xs font-semibold text-lagoon-primary uppercase tracking-wider">
            AI Botanical Answer
          </span>
          <span className="ml-auto text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            CONFIDENCE 98.4%
          </span>
        </div>
        <p className="text-xs sm:text-sm text-lagoon-deep leading-relaxed">
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
      type: "user",
      badge: "EXPLANATION",
      text: "All objects in a vacuum accelerate toward Earth at the exact same rate (-9.8 m/s²), regardless of their individual mass.",
    },
    {
      role: "TEACHMEWRONG AI",
      type: "ai-wrong",
      badge: "INTENTIONAL MISCONCEPTION",
      text: "Wait, isn't that impossible? A 100kg steel cannonball has way more gravitational force pulling it than a 10g marble, so obviously the cannonball must hit first!",
    },
    {
      role: "YOU",
      type: "user",
      badge: "CORRECTING THE FLAW",
      text: "While gravitational force is higher (F = G*M*m/r²), acceleration is a = F/m. The inertial mass in F=ma cancels out the gravitational mass, producing identical acceleration g!",
    },
    {
      role: "TEACHMEWRONG AI",
      type: "ai-correct",
      badge: "UNDERSTANDING UPDATED",
      text: "Aha! Galileo & Einstein equivalence principle! The extra inertia of the heavy object perfectly resists the stronger pull. You truly understand this concept.",
    },
  ];

  return (
    <div className="w-full rounded-2xl glass-panel p-5 sm:p-7 border border-white/80 shadow-glass-sm flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-lagoon-deep">
            REVERSE-PEDAGOGY CONVERSATION UI
          </span>
        </div>
        <span className="font-mono text-xs text-lagoon-primary bg-lagoon-glow px-2.5 py-0.5 rounded-full font-medium">
          STEP {Math.min(step + 1, steps.length)} OF {steps.length}
        </span>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col gap-3 min-h-[220px]">
        {steps.slice(0, step + 1).map((item, idx) => {
          const isUser = item.type === "user";
          const isWrong = item.type === "ai-wrong";
          return (
            <div
              key={idx}
              className={`flex flex-col max-w-[90%] p-3.5 rounded-2xl transition-all duration-300 ${
                isUser
                  ? "ml-auto bg-lagoon-primary text-white rounded-br-xs shadow-xs"
                  : isWrong
                  ? "mr-auto bg-amber-50 border border-amber-200 text-lagoon-deep rounded-bl-xs"
                  : "mr-auto bg-emerald-50 border border-emerald-200 text-lagoon-deep rounded-bl-xs"
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className={`font-mono text-[10px] font-bold tracking-wider uppercase ${isUser ? "text-lagoon-accent" : isWrong ? "text-amber-700" : "text-emerald-700"}`}>
                  {item.role}
                </span>
                <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded uppercase ${isUser ? "bg-white/20 text-white" : isWrong ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>
                  {item.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">{item.text}</p>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pt-3 border-t border-lagoon-border/70 mt-2">
        <span className="font-mono text-[11px] text-lagoon-muted">
          {step === steps.length - 1 ? "✓ Mastery Proven" : "Interactive conversation stepper:"}
        </span>
        <div className="flex items-center gap-2">
          {step > 0 && (
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="px-3 py-1.5 rounded-lg border border-lagoon-border font-mono text-xs text-lagoon-muted hover:bg-white"
            >
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-lagoon-primary text-white font-mono text-xs font-medium hover:bg-lagoon-secondary"
            >
              <span>Next Turn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => setStep(0)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-lagoon-glow text-lagoon-primary border border-lagoon-accent/40 font-mono text-xs font-medium"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Debate</span>
            </button>
          )}
        </div>
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
      action: "ACTION TRIGGERED: POMODORO PAUSED",
      confidence: "99.2%",
      color: "emerald",
      latency: "22ms",
    },
    thumbs: {
      pose: "ERGONOMIC · UPRIGHT",
      gesture: "THUMBS UP RECOGNIZED",
      action: "ACTION TRIGGERED: RESUME SESSION",
      confidence: "98.5%",
      color: "teal",
      latency: "24ms",
    },
    slouch: {
      pose: "SPINAL DEVIATION > 18°",
      gesture: "NO HAND GESTURE",
      action: "NUDGE: GENTLE ERGONOMIC ALERT",
      confidence: "96.4%",
      color: "amber",
      latency: "28ms",
    },
  };

  const curr = gestureStates[selectedGesture];

  return (
    <div className="w-full rounded-2xl glass-panel p-5 sm:p-7 border border-white/80 shadow-glass-sm flex flex-col gap-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-3">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-lagoon-primary" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-lagoon-deep">
            SIMULATED VISION FEED (ON-DEVICE)
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-lagoon-muted">
          <span>60 FPS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-lagoon-primary font-medium">{curr.latency} INFERENCE</span>
        </div>
      </div>

      {/* Simulated Camera Frame with Technical Overlays */}
      <div className="relative aspect-[16/9] w-full rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center border border-lagoon-border">
        {/* Subtle grid in frame */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#39B8B0_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Abstract Skeleton Wireframe Visual */}
        <svg className="w-full h-full p-8 opacity-75 stroke-[#39B8B0] fill-none" viewBox="0 0 200 120">
          {/* Head & Spine */}
          <circle cx="100" cy="30" r="14" strokeWidth="1.5" />
          <line x1="100" y1="44" x2="100" y2="85" strokeWidth="1.5" />
          {/* Shoulders */}
          <line x1="70" y1="52" x2="130" y2="52" strokeWidth="1.5" />
          {/* Left Arm */}
          <line x1="70" y1="52" x2="55" y2="75" strokeWidth="1.5" />
          <line x1="55" y1="75" x2="45" y2="95" strokeWidth="1.5" />
          {/* Right Arm (Gesture) */}
          <line x1="130" y1="52" x2="148" y2="40" strokeWidth="1.5" strokeDasharray={selectedGesture === "palm" ? "none" : "2 2"} />
          <circle cx="148" cy="40" r="4" fill="#39B8B0" />
          <circle cx="100" cy="30" r="3" fill="#14919B" />
          <circle cx="70" cy="52" r="2.5" fill="#39B8B0" />
          <circle cx="130" cy="52" r="2.5" fill="#39B8B0" />
        </svg>

        {/* HUD Overlay Labels */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 font-mono text-[10px]">
          <span className="bg-black/60 backdrop-blur-xs text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/30 font-medium">
            ● POSE: {curr.pose}
          </span>
          <span className="bg-black/60 backdrop-blur-xs text-[#39B8B0] px-2.5 py-1 rounded border border-[#39B8B0]/30 font-medium">
            ● GESTURE: {curr.gesture}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg border border-white/20 font-mono text-xs flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-lagoon-accent" />
          <span>{curr.action}</span>
        </div>
      </div>

      {/* Interactive Trigger Selectors */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
        <span className="font-mono text-[11px] text-lagoon-muted">Simulate Gesture:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedGesture("palm")}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all ${
              selectedGesture === "palm"
                ? "bg-lagoon-primary text-white font-medium"
                : "bg-white/70 text-lagoon-muted border border-lagoon-border hover:bg-white"
            }`}
          >
            Open Palm (Pause)
          </button>
          <button
            onClick={() => setSelectedGesture("thumbs")}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all ${
              selectedGesture === "thumbs"
                ? "bg-lagoon-primary text-white font-medium"
                : "bg-white/70 text-lagoon-muted border border-lagoon-border hover:bg-white"
            }`}
          >
            Thumbs Up (Resume)
          </button>
          <button
            onClick={() => setSelectedGesture("slouch")}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all ${
              selectedGesture === "slouch"
                ? "bg-amber-600 text-white font-medium"
                : "bg-white/70 text-lagoon-muted border border-lagoon-border hover:bg-white"
            }`}
          >
            Slouch Warning
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. KAAL-CHAKRA MOCKUP
// ==========================================
export function KaalChakraMockup() {
  const [pulsePin, setPulsePin] = useState<number>(1);

  const flowNodes = [
    { label: "WEB / MOBILE UI", detail: "React & WebSocket Client", step: "01" },
    { label: "MICROCONTROLLER", detail: "ESP32 Wi-Fi / Low Latency C++", step: "02" },
    { label: "MOTOR / SENSORS", detail: "Hall Effect & Servo PWM Array", step: "03" },
    { label: "PHYSICAL BOARD", detail: "Kinetic Tactile Pieces & Magnets", step: "04" },
  ];

  return (
    <div className="w-full rounded-2xl glass-panel p-5 sm:p-7 border border-white/80 shadow-glass-sm flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-lagoon-border/70 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-lagoon-primary" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-lagoon-deep">
            CYBER-PHYSICAL IOT TOPOLOGY
          </span>
        </div>
        <span className="font-mono text-xs font-bold text-lagoon-primary bg-lagoon-glow px-3 py-0.5 rounded-full border border-lagoon-accent/30">
          HARDWARE + SOFTWARE
        </span>
      </div>

      {/* Schematic Connection Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-2">
        {flowNodes.map((node, i) => {
          const isSelected = pulsePin === i + 1;
          return (
            <div
              key={i}
              onClick={() => setPulsePin(i + 1)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-white border-lagoon-primary shadow-md shadow-lagoon-primary/10 -translate-y-0.5"
                  : "bg-white/50 border-lagoon-border hover:bg-white/80"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-lagoon-primary font-bold">
                  STEP {node.step}
                </span>
                <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-lagoon-accent animate-ping" : "bg-lagoon-border"}`} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xs text-lagoon-deep tracking-tight">
                  {node.label}
                </h4>
                <p className="text-[11px] text-lagoon-muted mt-1 leading-snug font-mono">
                  {node.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hardware Telemetry Monitor */}
      <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs flex flex-col gap-2 border border-lagoon-primary/20">
        <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-800 pb-1.5">
          <span>ESP32_TELEMETRY.LOG</span>
          <span className="text-emerald-400">STATUS: 200 OK (SYNCED)</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
          <div>
            <span className="text-slate-400 block text-[10px]">BAUD RATE</span>
            <span className="text-lagoon-accent">115200</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">WEBSOCKET</span>
            <span className="text-emerald-300">&lt;65ms ping</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">HALL SENSOR</span>
            <span className="text-lagoon-accent">PIN 34: HIGH</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">SERVO ANGLE</span>
            <span className="text-emerald-300">92° LATCHED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. CODEMENTOR.AI MOCKUP
// ==========================================
export function CodeMentorMockup() {
  const [fixed, setFixed] = useState(false);

  return (
    <div className="w-full rounded-2xl glass-panel p-5 sm:p-7 border border-white/80 shadow-glass-sm flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-lagoon-border/70 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-lagoon-primary" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-lagoon-deep">
            AST STATIC ANALYSIS ENGINE
          </span>
        </div>
        <button
          onClick={() => setFixed(!fixed)}
          className={`px-3 py-1 rounded-md font-mono text-xs font-medium transition-all ${
            fixed
              ? "bg-emerald-600 text-white"
              : "bg-lagoon-primary text-white hover:bg-lagoon-secondary"
          }`}
        >
          {fixed ? "✓ Revert to Bug" : "⚡ Apply AI Fix"}
        </button>
      </div>

      {/* Code Window */}
      <div className="rounded-xl bg-[#0f172a] text-slate-200 p-4 font-mono text-xs leading-relaxed overflow-x-auto border border-slate-800">
        <div className="text-slate-500 mb-2 select-none">// api/ingestion.ts</div>
        
        {!fixed ? (
          <div>
            <div><span className="text-purple-400">async function</span> <span className="text-blue-300">fetchSensorData</span>() &#123;</div>
            <div className="pl-4 text-red-300 bg-red-950/40 py-1 px-1 rounded -mx-1 border-l-2 border-red-500">
              <span className="text-purple-400">const</span> result = fetchData(); <span className="text-red-400 text-[10px] select-none">// ⚠️ Missing await!</span>
            </div>
            <div className="pl-4"><span className="text-purple-400">return</span> result.status; <span className="text-slate-500">// Cannot read property of Promise</span></div>
            <div>&#125;</div>
          </div>
        ) : (
          <div>
            <div><span className="text-purple-400">async function</span> <span className="text-blue-300">fetchSensorData</span>() &#123;</div>
            <div className="pl-4 text-emerald-300 bg-emerald-950/40 py-1 px-1 rounded -mx-1 border-l-2 border-emerald-500">
              <span className="text-purple-400">try</span> &#123;
            </div>
            <div className="pl-8 text-emerald-200">
              <span className="text-purple-400">const</span> result = <span className="text-lagoon-accent font-bold">await</span> fetchData();
            </div>
            <div className="pl-8 text-emerald-200">
              <span className="text-purple-400">return</span> result?.status ?? <span className="text-amber-300">"idle"</span>;
            </div>
            <div className="pl-4 text-emerald-300">&#125; <span className="text-purple-400">catch</span> (err) &#123; <span className="text-slate-400">handleError(err);</span> &#125;</div>
            <div>&#125;</div>
          </div>
        )}
      </div>

      {/* AI Analysis Card */}
      <div className={`p-3.5 rounded-xl border transition-all ${
        fixed 
          ? "bg-emerald-50/70 border-emerald-200" 
          : "bg-amber-50/70 border-amber-200"
      }`}>
        <div className="flex items-center gap-2 mb-1">
          {fixed ? (
            <Check className="w-4 h-4 text-emerald-600" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          )}
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-lagoon-deep">
            {fixed ? "AI Validation Passed" : "AI Diagnostic Warning"}
          </span>
        </div>
        <p className="text-xs text-lagoon-muted leading-relaxed">
          {fixed
            ? "Resolved: Promise is correctly awaited inside try/catch boundary with safe fallback optional chaining."
            : "Potential Issue: Unhandled asynchronous error. 'fetchData()' returns a pending Promise; accessing '.status' immediately produces an undefined runtime crash."
          }
        </p>
      </div>
    </div>
  );
}
