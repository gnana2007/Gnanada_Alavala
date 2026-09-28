// Portfolio Content & Data System for Gnanada
// Creative Engineer / AI Builder

export const profile = {
  name: "Gnanada",
  fullName: "Alavala Gnanada",
  role: "Creative Engineer / AI Builder",
  headline: "I BUILD INTELLIGENT SYSTEMS PEOPLE CAN INTERACT WITH.",
  subheadline: "AI / ML · FULL STACK · COMPUTER VISION · IoT",
  bio: "I turn unusual ideas into working software, intelligent systems and interactive prototypes.",
  introAbout: [
    "I enjoy turning ideas that sound slightly unusual into things that actually work.",
    "My work sits at the intersection of AI, full-stack engineering, computer vision and physical interaction.",
    "Sometimes that means building an AI system. Sometimes it means connecting software to hardware. Usually, it means experimenting until something works.",
  ],
  location: "Vijayawada, India · SRM University-AP",
  email: "alavalagnanada@gmail.com",
  phone: "+91 6301141479",
  github: "gnana2007",
  githubUrl: "https://github.com/gnana2007",
  linkedin: "gnanadaalavala",
  linkedinUrl: "https://linkedin.com/in/gnanadaalavala",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    school: "SRM University-AP",
    period: "2024 — Present",
    score: "CGPA 8.6 / 10",
  },
};

export type ProjectCategory = "ALL" | "AI / ML" | "FULL STACK" | "COMPUTER VISION" | "HARDWARE" | "EXPERIMENTS";

export type Project = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: "AI / ML" | "FULL STACK" | "COMPUTER VISION" | "HARDWARE" | "EXPERIMENTS";
  badge?: string;
  tech: string[];
  description: string;
  metric?: {
    value: string;
    label: string;
  };
  workflow: string[];
  bullets: string[];
  link?: string;
  githubUrl?: string;
  demoType: "plantwise" | "teachmewrong" | "timesensei" | "kaalchakra" | "codementor" | "keno" | "recipora";
};

export const projects: Project[] = [
  {
    id: "plantwise",
    number: "01",
    name: "PlantWise",
    subtitle: "AI Plant Knowledge Search Engine",
    category: "AI / ML",
    tech: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "Gemini", "NLP"],
    description: "An AI-powered semantic search engine for plant knowledge, designed to answer natural-language questions using transformer embeddings and vector retrieval.",
    metric: {
      value: "21,150+",
      label: "documents indexed",
    },
    workflow: [
      "Which plants grow in black soil?",
      "Semantic Search (Vector Embeddings)",
      "Relevant plant knowledge retrieved",
      "AI generated botanical answer",
    ],
    bullets: [
      "Built a semantic search engine that answers natural-language questions about plants, using transformer embeddings and ChromaDB vector indexing.",
      "Engineered automated ingestion and token chunking pipeline for botanical datasets across 21,150+ plant knowledge vectors.",
      "Integrated Gemini API to formulate conversational, context-grounded botanical answers with source attribution.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "plantwise",
  },
  {
    id: "teachmewrong",
    number: "02",
    name: "TeachMeWrong",
    subtitle: "The AI That Learns From You",
    category: "AI / ML",
    badge: "REVERSE-PEDAGOGY AI",
    tech: ["React", "FastAPI", "Python", "LLM Feedback Loop", "Tailwind CSS"],
    description: "An AI intentionally misunderstands a concept so that the learner has to teach and correct it. The ultimate proof that you understand a subject is your ability to detect and fix subtle misconceptions.",
    metric: {
      value: "5-Step",
      label: "Active Recall Loop",
    },
    workflow: [
      "YOU: Explain a concept",
      "AI: Misunderstands intentionally",
      "YOU: Correct the flaw",
      "AI: Updates understanding",
      "YOU: Prove true mastery",
    ],
    bullets: [
      "Inverted traditional RAG tutoring by prompting the model to adopt believable student misconceptions.",
      "Forces active recall and critical thinking through iterative conversational debugging.",
      "Tracks user explanatory depth and rewards nuance over simple rote keyword repetition.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "teachmewrong",
  },
  {
    id: "timesensei",
    number: "03",
    name: "TimeSensei",
    subtitle: "Computer Vision Productivity System",
    category: "COMPUTER VISION",
    tech: ["Python", "OpenCV", "MediaPipe", "React", "WebSocket", "NumPy"],
    description: "A contactless computer vision productivity system tracking focus, posture, and gesture-driven commands in real time with minimal latency.",
    metric: {
      value: "<28ms",
      label: "gesture inference",
    },
    workflow: [
      "Camera input stream",
      "Vision model & Landmark detection",
      "Gesture recognition trigger",
      "Action: Pause / Focus logged",
    ],
    bullets: [
      "Trained custom landmark classifiers using MediaPipe and OpenCV to identify ergonomic posture and hand gestures.",
      "Detects screen fatigue, distance-from-camera, and enables gesture control for timer pause/resume.",
      "100% on-device vision processing to preserve strict user privacy without cloud streaming.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "timesensei",
  },
  {
    id: "kaal-chakra",
    number: "04",
    name: "Kaal-Chakra",
    subtitle: "Interactive IoT Board Game",
    category: "HARDWARE",
    badge: "HARDWARE + SOFTWARE",
    tech: ["Microcontroller (ESP32)", "C++", "Sensors & Motors", "Web Dashboard", "IoT"],
    description: "A tangible, interactive cyber-physical board game bridging tactile physical pieces with a synchronized real-time web state engine and motorized feedback.",
    metric: {
      value: "Sub-100ms",
      label: "hardware-web sync",
    },
    workflow: [
      "MOBILE / WEB INTERFACE",
      "MICROCONTROLLER (ESP32)",
      "MOTOR / SENSOR SYSTEM",
      "PHYSICAL GAME BOARD",
    ],
    bullets: [
      "Designed custom hardware circuitry linking Hall-effect sensors and servo motors to an ESP32 microcontroller.",
      "Engineered real-time bi-directional WebSocket telemetry between the physical game board and web interface.",
      "Bridges physical gameplay mechanics with algorithmic digital game theory calculations.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "kaalchakra",
  },
  {
    id: "codementor",
    number: "05",
    name: "CodeMentor.ai",
    subtitle: "AI Debugging Platform",
    category: "AI / ML",
    tech: ["TypeScript", "Next.js", "AST Analysis", "Gemini API", "FastAPI"],
    description: "An AI-powered debugging environment that analyzes code ASTs to identify silent logic bugs, unhandled async promises, and offers one-click validated fixes.",
    metric: {
      value: "Real-time",
      label: "AST static analysis",
    },
    workflow: [
      "const result = fetchData()",
      "AI ANALYSIS: Unhandled asynchronous error",
      "Suggested fix: await fetchData() + try/catch",
    ],
    bullets: [
      "Extracts Abstract Syntax Tree nodes to pinpoint race conditions and unhandled error boundaries.",
      "Generates precise side-by-side patch diffs rather than generic conversational advice.",
      "Synthesizes unit test recommendations targeting identified edge cases.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "codementor",
  },
  {
    id: "keno",
    number: "06",
    name: "Keno",
    subtitle: "Interactive Piano Learning Platform",
    category: "FULL STACK",
    tech: ["React.js", "FastAPI", "Python", "Scikit-learn", "Web Audio API"],
    description: "Converts songs into guided interactive keyboard exercises and tracks performance metrics like accuracy, tempo consistency, and reaction delay.",
    metric: {
      value: "ML-Based",
      label: "difficulty scaling",
    },
    workflow: [
      "MIDI / Song Sheet Ingestion",
      "Interactive Guided Playalong",
      "Scikit-learn performance scoring",
      "Dynamic adaptive progression",
    ],
    bullets: [
      "Synthesizes polyphonic piano notes in browser using Web Audio API oscillators.",
      "Analyzes user latency curves to categorize practice difficulty and recommend personalized exercises.",
      "Built with responsive canvas visualizers and keyboard key bindings.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "keno",
  },
  {
    id: "recipora",
    number: "07",
    name: "Recipora",
    subtitle: "Ingredient-Based Recipe Discovery",
    category: "FULL STACK",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB", "Cosine Similarity"],
    description: "Suggests zero-waste culinary recipes based on ingredients currently in your pantry, utilizing vector search and fuzzy matching to prevent household food waste.",
    metric: {
      value: "Zero-Waste",
      label: "pantry optimizer",
    },
    workflow: [
      "Input available pantry items",
      "Vector similarity & ingredient matching",
      "Ranked zero-waste recipe options",
    ],
    bullets: [
      "Engineered an ingredient matching algorithm maximizing utilization of expiring produce.",
      "Built clean, modular REST API in Express with MongoDB schema for thousands of recipes.",
      "Implemented quick substitution recommendations for missing secondary ingredients.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "recipora",
  },
];

export const labExperiments = [
  {
    id: "air-drawing",
    title: "Air Drawing",
    tagline: "Contactless Canvas",
    tech: "OpenCV · MediaPipe · Canvas",
    description: "Draw in 2D space by tracking the 3D tip of an index finger without touching the screen.",
    category: "Computer Vision",
    interactiveType: "drawing",
  },
  {
    id: "name-music",
    title: "Name → Music",
    tagline: "Algorithmic Melody",
    tech: "Web Audio API · Synthesis",
    description: "Converts any name or word into a harmonious pentatonic synthesizer melody based on ASCII hashes.",
    category: "Creative Audio",
    interactiveType: "melody",
  },
  {
    id: "single-photo-3d",
    title: "Single Photo → 3D VR",
    tagline: "9 Hacks 2nd Runner-Up",
    tech: "Depth Maps · WebGL · Three.js",
    description: "Reconstructs pseudo-3D point clouds from a single 2D photograph and renders interactive parallax depth.",
    category: "Spatial AI",
    interactiveType: "depth3d",
  },
  {
    id: "rag-chunking",
    title: "RAG Visualizer",
    tagline: "Vector Distance Inspector",
    tech: "Cosine Similarity · Vectors",
    description: "Real-time visual demonstration of high-dimensional sentence embedding distances in 2D space.",
    category: "AI / ML",
    interactiveType: "rag",
  },
  {
    id: "edge-detection",
    title: "Kernel Convolution",
    tagline: "Computer Vision Primitive",
    tech: "Sobel Operator · Image Kernels",
    description: "Interactive visual matrix showing how edge detection kernels transform raw pixel grids.",
    category: "Computer Vision",
    interactiveType: "kernel",
  },
  {
    id: "ai-agent-flow",
    title: "Autonomous Agent",
    tagline: "Tool-Calling Loop",
    tech: "State Machines · ReAct Pattern",
    description: "Step-by-step simulator of an AI agent decomposing a complex problem into verifiable tool calls.",
    category: "AI Systems",
    interactiveType: "agent",
  },
];

export const buildSteps = [
  {
    number: "01",
    title: "QUESTION",
    question: "What problem are we actually solving?",
    description: "Before writing any code, I drill down to understand the core mechanical or human constraint. If the problem is unclear, no amount of AI or architecture can save it.",
  },
  {
    number: "02",
    title: "PROTOTYPE",
    question: "Build the smallest thing that proves the idea.",
    description: "Strip out every non-essential feature. Build a 24-hour spike to validate the vector retrieval, the sensor reading, or the vision model.",
  },
  {
    number: "03",
    title: "ENGINEER",
    question: "Turn the prototype into a reliable system.",
    description: "Harden the pipeline. Add typed contracts, handle network edge cases, optimize latency, and structure modular components.",
  },
  {
    number: "04",
    title: "INTERACT",
    question: "Make it something people can actually use.",
    description: "Design tactile feedback, zero-friction controls, micro-animations, and clear state transitions. Software should feel crisp and alive.",
  },
  {
    number: "05",
    title: "ITERATE",
    question: "Measure, break, improve, repeat.",
    description: "Test under extreme inputs, observe real user behavior, refine vector weights, and continuously push the system toward elegance.",
  },
];

export const achievements = [
  {
    metric: "21,150+",
    label: "documents indexed",
    highlight: "PlantWise Vector Database",
  },
  {
    metric: "120+",
    label: "DSA problems solved",
    highlight: "LeetCode & Competitive Platforms",
  },
  {
    metric: "🥈 2nd Runner-Up",
    label: "9 Hacks Hackathon",
    highlight: "Single Photo → 3D Model in VR",
  },
  {
    metric: "8.6 / 10",
    label: "CGPA at SRM AP",
    highlight: "B.Tech Computer Science & Engineering",
  },
  {
    metric: "15+",
    label: "categories supported",
    highlight: "Across AI & Multi-Modal Models",
  },
];

export const techStackCategories = [
  {
    category: "AI / ML",
    items: [
      { name: "Python", usedIn: "PlantWise, TimeSensei, Keno" },
      { name: "Hugging Face", usedIn: "Transformer models & embeddings" },
      { name: "scikit-learn", usedIn: "Keno difficulty classification" },
      { name: "Sentence Transformers", usedIn: "PlantWise semantic search" },
      { name: "RAG", usedIn: "PlantWise & Knowledge retrieval" },
      { name: "LLMs / Gemini", usedIn: "CodeMentor & PlantWise" },
      { name: "ChromaDB", usedIn: "21K+ botanical vector index" },
      { name: "OpenCV", usedIn: "TimeSensei & Air Drawing" },
      { name: "MediaPipe", usedIn: "TimeSensei gesture recognition" },
    ],
  },
  {
    category: "FULL STACK",
    items: [
      { name: "React", usedIn: "Portfolio, Keno, Recipora, TimeSensei" },
      { name: "Next.js", usedIn: "CodeMentor.ai web platform" },
      { name: "TypeScript", usedIn: "Modern type-safe web applications" },
      { name: "Node.js", usedIn: "Recipora backend & microservices" },
      { name: "Express", usedIn: "REST APIs & middleware pipelines" },
      { name: "FastAPI", usedIn: "PlantWise & ML inference APIs" },
      { name: "Tailwind CSS", usedIn: "Precision design systems" },
    ],
  },
  {
    category: "DATA & STORAGE",
    items: [
      { name: "PostgreSQL", usedIn: "Relational data modeling" },
      { name: "Supabase", usedIn: "Real-time DB & auth systems" },
      { name: "MongoDB", usedIn: "Recipora recipe document store" },
      { name: "ChromaDB", usedIn: "Vector similarity embeddings" },
    ],
  },
  {
    category: "TOOLS & HARDWARE",
    items: [
      { name: "ESP32 / Microcontrollers", usedIn: "Kaal-Chakra IoT game board" },
      { name: "Docker", usedIn: "Containerized deployment pipelines" },
      { name: "Git & GitHub", usedIn: "Version control & collaboration" },
      { name: "Vercel & Render", usedIn: "Cloud deployments & CI/CD" },
      { name: "Postman", usedIn: "API contract testing" },
    ],
  },
];

export const currentlyBuilding = [
  "AI Agents with verifiable tool-calling workflows",
  "Contactless Computer Vision spatial interfaces",
  "Interactive IoT cyber-physical hardware systems",
  "High-efficiency RAG & Vector Embeddings retrieval",
  "Subtle, tactile experimental micro-interfaces",
];

export const assistantQA: { question: string; answer: string; relatedProject?: string }[] = [
  {
    question: "What is PlantWise?",
    answer: "PlantWise is an AI-powered semantic search engine for botanical knowledge indexing over 21,150+ plant documents. It uses Sentence Transformers and ChromaDB to answer complex natural-language queries (e.g., 'Which plants grow in black soil?') by extracting relevant vector chunks and synthesizing answers with Gemini.",
    relatedProject: "plantwise",
  },
  {
    question: "Which projects use AI?",
    answer: "Several projects feature custom AI pipelines: PlantWise uses Sentence Transformers and ChromaDB for vector RAG; TeachMeWrong uses a reverse-pedagogy LLM feedback loop; CodeMentor.ai uses AST graph extraction with Gemini; and TimeSensei uses MediaPipe & OpenCV for real-time gesture & pose classification.",
    relatedProject: "plantwise",
  },
  {
    question: "What technologies does Gnanada use?",
    answer: "Gnanada works across Python (FastAPI, scikit-learn, OpenCV, ChromaDB, Sentence Transformers), Full-Stack JavaScript/TypeScript (React, Next.js, Node.js, Express, Tailwind CSS), Databases (PostgreSQL, Supabase, MongoDB), and Hardware/IoT (ESP32 microcontrollers, sensors, motors, C++).",
  },
  {
    question: "Tell me about the hardware projects.",
    answer: "Kaal-Chakra is an interactive IoT board game that combines hardware and software. It links an ESP32 microcontroller, Hall-effect sensors, and servo motors with a real-time web dashboard over low-latency WebSockets.",
    relatedProject: "kaal-chakra",
  },
  {
    question: "Which project demonstrates computer vision?",
    answer: "TimeSensei is a computer vision productivity system built with OpenCV and MediaPipe. It tracks user posture, eye distance, and detects hand gestures (<28ms latency) without transmitting raw camera feeds off-device. In The Lab, you can also test the 'Air Drawing' and 'Kernel Convolution' experiments!",
    relatedProject: "timesensei",
  },
  {
    question: "What did she win at 9 Hacks?",
    answer: "Gnanada achieved 2nd Runner-Up at the 9 Hacks Hackathon for engineering an end-to-end system that converts a single 2D photograph into an interactive 3D model with VR viewer integration.",
  },
  {
    question: "What is TeachMeWrong?",
    answer: "TeachMeWrong is an active-recall AI system that flips traditional tutoring. Instead of explaining things to you, it intentionally misunderstands concepts with believable flaws, challenging you to find and correct its misconceptions to prove your true mastery.",
    relatedProject: "teachmewrong",
  },
  {
    question: "Where does Gnanada study?",
    answer: "Gnanada is currently pursuing her B.Tech in Computer Science and Engineering at SRM University-AP (CGPA 8.6/10) and is an active member at Next Tech Lab (NTL).",
  },
];
