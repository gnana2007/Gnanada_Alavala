import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Bot, ArrowRight, CornerDownLeft } from "lucide-react";
import { assistantQA, profile, projects } from "../data/content";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  relatedProject?: string;
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
      text: "Hello! I'm Gnanada's Portfolio AI, indexed directly over her projects, research at Next Tech Lab, and technical stack. What would you like to explore?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sampleChips = [
    "What is PlantWise?",
    "Which projects use AI?",
    "What technologies does Gnanada use?",
    "Tell me about the hardware projects.",
    "Which project demonstrates computer vision?",
    "What did she win at 9 Hacks?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Knowledge Retrieval Engine based on question embeddings / keyword matching
  const findAnswer = (query: string): { text: string; relatedProject?: string } => {
    const qLower = query.toLowerCase();

    // Check pre-indexed Q&A
    for (const item of assistantQA) {
      const matchWords = item.question.toLowerCase().split(" ").filter((w) => w.length > 3);
      const matches = matchWords.filter((w) => qLower.includes(w));
      if (matches.length >= 2 || qLower.includes(item.question.toLowerCase())) {
        return { text: item.answer, relatedProject: item.relatedProject };
      }
    }

    if (qLower.includes("plantwise") || qLower.includes("plant")) {
      const p = projects.find((x) => x.id === "plantwise")!;
      return {
        text: `${p.name} is ${p.subtitle}. ${p.description} It indexes ${p.metric?.value} botanical documents in ChromaDB with sentence embeddings.`,
        relatedProject: "plantwise",
      };
    }

    if (qLower.includes("teachmewrong") || qLower.includes("teach") || qLower.includes("pedagogy")) {
      const p = projects.find((x) => x.id === "teachmewrong")!;
      return {
        text: `${p.name} is ${p.subtitle}. It turns tutoring upside down: the AI intentionally misunderstands concepts, challenging the learner to correct it and prove mastery.`,
        relatedProject: "teachmewrong",
      };
    }

    if (qLower.includes("timesensei") || qLower.includes("vision") || qLower.includes("camera") || qLower.includes("posture")) {
      const p = projects.find((x) => x.id === "timesensei")!;
      return {
        text: `${p.name} is a contactless computer vision productivity system built with OpenCV & MediaPipe (<28ms gesture inference). It tracks posture and commands without off-device cloud video streaming.`,
        relatedProject: "timesensei",
      };
    }

    if (qLower.includes("kaal") || qLower.includes("chakra") || qLower.includes("hardware") || qLower.includes("iot") || qLower.includes("board")) {
      const p = projects.find((x) => x.id === "kaal-chakra")!;
      return {
        text: `${p.name} is an interactive cyber-physical IoT board game bridging physical tactile pieces, Hall-effect sensors, and servo motors to a synchronized web engine via an ESP32 microcontroller.`,
        relatedProject: "kaal-chakra",
      };
    }

    if (qLower.includes("codementor") || qLower.includes("debug") || qLower.includes("ast")) {
      const p = projects.find((x) => x.id === "codementor")!;
      return {
        text: `${p.name} is an AI debugging platform that parses code AST graphs in real time to isolate unhandled async promise rejections and generates precision code diffs.`,
        relatedProject: "codementor",
      };
    }

    if (qLower.includes("hackathon") || qLower.includes("9 hacks") || qLower.includes("3d") || qLower.includes("vr")) {
      return {
        text: "Gnanada achieved 2nd Runner-Up at the 9 Hacks Hackathon for engineering an automated pipeline that takes a single 2D photo and reconstructs interactive 3D depth models in VR!",
      };
    }

    if (qLower.includes("contact") || qLower.includes("email") || qLower.includes("hire") || qLower.includes("reach")) {
      return {
        text: `You can reach Gnanada directly via email at ${profile.email} or on LinkedIn at ${profile.linkedinUrl}. She is open to engineering discussions, internships, and collaborative builds!`,
      };
    }

    return {
      text: "Gnanada focuses on AI/ML (RAG, Sentence Transformers, Gemini, OpenCV), Full-Stack Systems (React, Next.js, Node, FastAPI), and IoT Hardware (ESP32). You can explore specific projects like PlantWise, TimeSensei, TeachMeWrong, or Kaal-Chakra above!",
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
      const res = findAnswer(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: res.text,
        relatedProject: res.relatedProject,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-lagoon-primary/20 text-lagoon-deep hover:text-lagoon-primary font-mono text-xs tracking-wider uppercase font-semibold shadow-[0_10px_30px_rgba(11,114,133,0.15)] hover:border-lagoon-primary/50 hover:bg-white hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 group"
          aria-label="Open Portfolio AI Assistant"
        >
          <Sparkles className="w-4 h-4 text-lagoon-accent group-hover:rotate-12 transition-transform duration-300" />
          <span>ASK MY PORTFOLIO AI</span>
          <ArrowRight className="w-3.5 h-3.5 text-lagoon-primary group-hover:translate-x-0.5 transition-transform" />
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
                  PORTFOLIO RAG AGENT
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-lagoon-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Index: 21K+ Docs & Resume</span>
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
                    className={`p-3.5 rounded-2xl leading-relaxed ${
                      isAi
                        ? "bg-lagoon-bg/90 border border-lagoon-border text-lagoon-deep rounded-bl-xs"
                        : "bg-lagoon-primary text-white rounded-br-xs shadow-xs font-normal"
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Project Jump Link if recognized */}
                  {m.relatedProject && onSelectProject && (
                    <button
                      onClick={() => onSelectProject(m.relatedProject!)}
                      className="mt-1.5 text-[10px] font-mono text-lagoon-primary flex items-center gap-1 hover:underline"
                    >
                      <span>Jump to {m.relatedProject.toUpperCase()} in Selected Work →</span>
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

          {/* Quick Sample Questions Chips */}
          <div className="px-4 py-2 bg-lagoon-bg/40 border-t border-lagoon-border/50 overflow-x-auto no-scrollbar flex items-center gap-1.5">
            {sampleChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(chip)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-lagoon-border/80 text-[10px] font-mono text-lagoon-deep hover:border-lagoon-primary hover:text-lagoon-primary transition-colors shrink-0"
              >
                {chip}
              </button>
            ))}
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
                placeholder="Ask about projects, tech stack, AI..."
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
