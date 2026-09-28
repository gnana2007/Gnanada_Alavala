import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Bot, CornerDownLeft, MessageSquareQuote } from "lucide-react";
import { assistantQA, profile } from "../data/content";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  isFallback?: boolean;
  relatedProject?: string;
  suggestedChips?: string[];
}

interface PortfolioAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onSelectProject?: (projectId: string) => void;
}

export default function PortfolioAssistant({
  isOpen,
  onClose,
  onOpen,
  onSelectProject,
}: PortfolioAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hi! I'm Gnanada's Portfolio AI. I can answer questions about her AI pipelines, computer vision systems, IoT hardware, and hackathon wins. What would you like to know?",
      suggestedChips: [
        "What is PlantWise?",
        "Tell me about 9 Hacks 3D VR",
        "How does Air Drawing work?",
        "Which projects use AI?",
        "Hardware & IoT projects",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Robust Domain-Specific Retrieval Engine with Fallback Detection
  const queryPortfolioKnowledge = (query: string): { 
    text: string; 
    relatedProject?: string; 
    isFallback?: boolean;
    suggestedChips?: string[];
  } => {
    const q = query.toLowerCase().trim();

    // 1. Direct Q&A match
    for (const item of assistantQA) {
      const qWords = item.question.toLowerCase().split(" ").filter((w) => w.length > 3);
      const matches = qWords.filter((w) => q.includes(w));
      if (matches.length >= 2 || q.includes(item.question.toLowerCase())) {
        return { text: item.answer, relatedProject: item.relatedProject };
      }
    }

    // 2. Project-Specific Keywords
    if (q.includes("plantwise") || q.includes("plant") || q.includes("botanical") || q.includes("soil")) {
      return {
        text: `PlantWise is an AI plant knowledge search engine indexing 21,150+ botanical documents in ChromaDB. It uses Sentence-Transformers (768-dim embeddings) and Gemini to answer complex natural-language agricultural questions.`,
        relatedProject: "plantwise",
      };
    }

    if (q.includes("3d") || q.includes("photo") || q.includes("vr") || q.includes("9 hacks") || q.includes("hackathon")) {
      return {
        text: `At the 9 Hacks Hackathon, Gnanada achieved 2nd Runner-Up for 'Single Photo → 3D Model'. The system predicts depth maps from a single 2D photograph, reconstructs a 48,000-vertex 3D point cloud, and renders it in an immersive VR viewer.`,
        relatedProject: "photo-to-3d",
      };
    }

    if (q.includes("air") || q.includes("drawing") || q.includes("finger") || q.includes("sketch")) {
      return {
        text: `'Air Drawing Canvas' is a touchless computer vision sketchpad built with OpenCV and MediaPipe. It tracks the 3D tip of an index finger at 60 FPS to draw vector lines without physically touching the screen.`,
        relatedProject: "air-drawing",
      };
    }

    if (q.includes("timesensei") || q.includes("posture") || q.includes("vision") || q.includes("camera") || q.includes("fatigue")) {
      return {
        text: `TimeSensei is an on-device computer vision productivity system (<28ms inference latency). It monitors posture ergonomics and recognizes hands-free gestures (open palm to pause, thumbs up to resume) with 100% on-device privacy.`,
        relatedProject: "timesensei",
      };
    }

    if (q.includes("teachmewrong") || q.includes("pedagogy") || q.includes("learn") || q.includes("teach")) {
      return {
        text: `TeachMeWrong flips traditional tutoring on its head: the AI deliberately adopts subtle conceptual flaws, challenging the user to detect, explain, and debug the misconception to prove true mastery.`,
        relatedProject: "teachmewrong",
      };
    }

    if (q.includes("kaal") || q.includes("chakra") || q.includes("hardware") || q.includes("iot") || q.includes("esp32") || q.includes("board game")) {
      return {
        text: `Kaal-Chakra is a cyber-physical IoT board game linking an ESP32 microcontroller, Hall-effect sensors, and servo motors with a real-time web state engine over low-latency WebSockets (<100ms sync).`,
        relatedProject: "kaal-chakra",
      };
    }

    if (q.includes("codementor") || q.includes("debug") || q.includes("ast") || q.includes("bug")) {
      return {
        text: `CodeMentor.ai performs static AST analysis to identify silent runtime bugs (like unhandled async Promises) and generates validated one-click code patches with Gemini.`,
        relatedProject: "codementor",
      };
    }

    if (q.includes("keno") || q.includes("piano") || q.includes("music")) {
      return {
        text: `Keno is an interactive piano learning platform built with React, FastAPI, Scikit-learn, and the Web Audio API. It turns songs into guided exercises and adapts difficulty based on user latency.`,
        relatedProject: "keno",
      };
    }

    if (q.includes("recipora") || q.includes("recipe") || q.includes("pantry") || q.includes("food")) {
      return {
        text: `Recipora is an ingredient-based zero-waste recipe search engine that matches expiring pantry items with delicious recipes using cosine vector similarity.`,
        relatedProject: "recipora",
      };
    }

    // 3. Skills, Tech Stack, Education & Background
    if (q.includes("tech") || q.includes("stack") || q.includes("languages") || q.includes("skills") || q.includes("framework")) {
      return {
        text: `Gnanada's core stack includes:\n• AI / ML: Python, Sentence Transformers, ChromaDB, OpenCV, MediaPipe, scikit-learn, Gemini\n• Full Stack: React, Next.js, TypeScript, Node.js, Express, FastAPI, Tailwind CSS\n• Hardware: ESP32 microcontrollers, Hall sensors, C++\n• Databases: PostgreSQL, Supabase, MongoDB`,
      };
    }

    if (q.includes("education") || q.includes("university") || q.includes("college") || q.includes("cgpa") || q.includes("study") || q.includes("srm")) {
      return {
        text: `Gnanada is pursuing her B.Tech in Computer Science and Engineering at SRM University-AP (CGPA 8.6 / 10). She is also an active member at Next Tech Lab (NTL).`,
      };
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("linkedin") || q.includes("github")) {
      return {
        text: `You can reach Gnanada at ${profile.email}, connect on LinkedIn (in/gnanadaalavala), or view her code on GitHub (@${profile.github}).`,
      };
    }

    if (q.includes("who are you") || q.includes("about") || q.includes("introduce")) {
      return {
        text: `Gnanada is a Computer Science engineering student and AI/full-stack builder at SRM University-AP. She turns unusual ideas into working software, intelligent systems, and interactive hardware prototypes.`,
      };
    }

    // 4. Intentional Fallback for Out-of-Domain / Irrelevant queries
    return {
      text: `I'm specialized in Gnanada's portfolio, engineering projects, AI/ML research, and tech stack. I don't have information on that topic, but you can explore any of these areas:`,
      isFallback: true,
      suggestedChips: [
        "What is PlantWise?",
        "Tell me about 9 Hacks 3D VR",
        "How does Air Drawing work?",
        "Tell me about Kaal-Chakra IoT",
        "What tech stack is used?",
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend ?? inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const res = queryPortfolioKnowledge(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: res.text,
        relatedProject: res.relatedProject,
        isFallback: res.isFallback,
        suggestedChips: res.suggestedChips,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 350);
  };

  return (
    <>
      {/* Sleek Floating Glassmorphic Icon Badge Launcher */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full glass-panel border border-white/90 shadow-[0_12px_35px_rgba(11,114,133,0.18)] hover:shadow-[0_15px_40px_rgba(11,114,133,0.28)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          aria-label="Open AI Assistant"
          title="Open AI Assistant"
        >
          {/* Subtle pulsating lagoon glow indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lagoon-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-lagoon-primary" />
          </span>

          <Sparkles className="w-6 h-6 text-lagoon-primary group-hover:rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* Glassmorphism Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-[420px] h-[580px] max-h-[85vh] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_rgba(11,114,133,0.2)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-lagoon-border/70 flex items-center justify-between bg-lagoon-bg/70">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-lagoon-glow text-lagoon-primary border border-lagoon-accent/40 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-lagoon-deep">
                  PORTFOLIO AI ASSISTANT
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-lagoon-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Portfolio Knowledge Engine</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white text-lagoon-muted hover:text-lagoon-deep transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 sm:p-5 overflow-y-auto flex flex-col gap-3.5 text-xs">
            {messages.map((m) => {
              const isAi = m.sender === "assistant";
              return (
                <div
                  key={m.id}
                  className={`flex flex-col max-w-[88%] ${isAi ? "mr-auto" : "ml-auto"}`}
                >
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                      isAi
                        ? m.isFallback
                          ? "bg-amber-50/90 border border-amber-200 text-lagoon-deep rounded-bl-xs"
                          : "bg-lagoon-bg/90 border border-lagoon-border text-lagoon-deep rounded-bl-xs"
                        : "bg-lagoon-primary text-white rounded-br-xs shadow-xs font-normal"
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Fallback suggestion chips */}
                  {m.suggestedChips && m.suggestedChips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.suggestedChips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(chip)}
                          className="px-2.5 py-1 rounded-full bg-white border border-lagoon-border text-[10px] font-mono text-lagoon-primary hover:bg-lagoon-glow transition-colors text-left"
                        >
                          → {chip}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Project Jump Link if recognized */}
                  {m.relatedProject && onSelectProject && (
                    <button
                      onClick={() => {
                        onSelectProject(m.relatedProject!);
                        onClose();
                      }}
                      className="mt-1.5 text-[10px] font-mono text-lagoon-primary flex items-center gap-1 hover:underline font-medium"
                    >
                      <MessageSquareQuote className="w-3 h-3" />
                      <span>Inspect {m.relatedProject.toUpperCase()} in Projects →</span>
                    </button>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="mr-auto p-3 rounded-2xl bg-lagoon-bg border border-lagoon-border text-lagoon-muted text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary animate-bounce [animation-delay:0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary animate-bounce [animation-delay:0.3s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-lagoon-border/70">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-lagoon-bg rounded-2xl px-3 py-2 border border-lagoon-border focus-within:border-lagoon-primary"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about projects, AI, 3D VR, tech stack..."
                className="flex-1 bg-transparent text-xs text-lagoon-deep focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-1.5 rounded-xl bg-lagoon-primary text-white hover:bg-lagoon-secondary disabled:opacity-30 transition-all"
                aria-label="Send message"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
