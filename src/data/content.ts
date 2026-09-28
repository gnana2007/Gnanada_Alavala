// Portfolio Content & Data System for Gnanada
// Creative Engineer / AI Builder

export const profile = {
  name: "Gnanada Alavala",
  fullName: "Gnanada Alavala",
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
  shortSummary: string;
  description: string;
  metric?: {
    value: string;
    label: string;
  };
  workflow: string[];
  bullets: string[];
  link?: string;
  githubUrl?: string;
  demoType: "plantwise" | "teachmewrong" | "timesensei" | "kaalchakra" | "codementor" | "airdrawing" | "photo3d" | "keno" | "recipora";
};

export const projects: Project[] = [
  {
    id: "plantwise",
    number: "01",
    name: "PlantWise",
    subtitle: "AI Plant Knowledge Search Engine",
    category: "AI / ML",
    tech: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "Gemini"],
    shortSummary: "Semantic search engine indexing 21,150+ plant knowledge documents via vector embeddings and RAG.",
    description: "An AI-powered semantic search engine for plant knowledge, designed to answer natural-language questions using transformer embeddings and vector retrieval. Ingests dense botanical datasets and applies cosine distance matching for context-grounded Gemini synthesis.",
    metric: {
      value: "21,150+",
      label: "documents indexed",
    },
    workflow: [
      "Natural-language query: 'Which plants grow in black soil?'",
      "Sentence-Transformers encoding into 768-dim vector space",
      "ChromaDB cosine similarity retrieval across 21K+ records",
      "Context-grounded Gemini synthesis with source citations",
    ],
    bullets: [
      "Engineered automated ingestion and chunking pipeline for botanical datasets across 21,150+ knowledge vectors.",
      "Achieved sub-120ms vector retrieval using ChromaDB indexing and custom similarity threshold filters.",
      "Integrated Gemini LLM with RAG prompt constraints to formulate factually grounded botanical answers.",
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
    shortSummary: "An active recall AI that intentionally adopts misconceptions, challenging learners to debug and correct it.",
    description: "An AI system that intentionally misunderstands a concept so that the learner has to teach and correct it. The ultimate proof that you understand a subject is your ability to detect and fix subtle misconceptions through rigorous conversational debugging.",
    metric: {
      value: "5-Step",
      label: "Active Recall Loop",
    },
    workflow: [
      "YOU: Explain a scientific concept",
      "AI: Formulates believable student misconception",
      "YOU: Debug the flaw and provide counter-evidence",
      "AI: Validates correction & updates understanding",
      "SYSTEM: Confirms conceptual mastery score",
    ],
    bullets: [
      "Inverted traditional RAG tutoring by prompting the model to adopt realistic misconceptions based on cognitive science.",
      "Forces active recall and critical thinking through multi-turn dialectical debugging.",
      "Evaluates user explanatory depth and rewards nuance over rote keyword repetition.",
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
    tech: ["Python", "OpenCV", "MediaPipe", "React", "WebSocket"],
    shortSummary: "Contactless computer vision pipeline tracking posture, eye fatigue, and hands-free gestures.",
    description: "A contactless computer vision productivity system tracking focus, posture, and gesture-driven commands in real time with minimal latency. All image processing runs strictly on-device to guarantee complete visual privacy.",
    metric: {
      value: "<28ms",
      label: "gesture inference",
    },
    workflow: [
      "Real-time webcam video stream ingestion",
      "MediaPipe skeletal landmark & facial geometry tracking",
      "Cosine distance heuristic for posture & gesture classification",
      "Instant state dispatch: Pomodoro timer pause/resume",
    ],
    bullets: [
      "Trained custom landmark classifiers using MediaPipe and OpenCV to identify ergonomic posture and gestures at 60 FPS.",
      "100% on-device vision processing ensuring zero camera feed transmission to external cloud servers.",
      "Enabled contactless gesture triggers (open palm pause, thumbs up resume) to minimize workflow interruption.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "timesensei",
  },
  {
    id: "air-drawing",
    number: "04",
    name: "Air Drawing Canvas",
    subtitle: "Contactless Gesture Sketchpad",
    category: "COMPUTER VISION",
    badge: "TOUCHLESS INTERACTION",
    tech: ["OpenCV", "MediaPipe", "HTML5 Canvas", "Vector Math"],
    shortSummary: "Draw in 2D space by tracking the 3D tip of an index finger without ever touching the screen.",
    description: "A touchless digital canvas interface that tracks the 3D coordinate of the user's index fingertip via MediaPipe landmark geometry and translates spatial movements into smooth vector strokes on an HTML5 canvas in real time.",
    metric: {
      value: "60 FPS",
      label: "canvas smoothing",
    },
    workflow: [
      "Optical hand landmark tracking & index tip isolation",
      "Distance threshold detection between thumb & index (pen down)",
      "Bézier curve interpolation for smooth stroke rendering",
      "Multi-color palette selection via finger tap triggers",
    ],
    bullets: [
      "Implemented Kalman filtering to remove finger jitter and produce silky, continuous strokes.",
      "Designed dynamic gestures for drawing mode, erasing, color switching, and canvas clearing.",
      "Runs fully in-browser with minimal CPU overhead.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "airdrawing",
  },
  {
    id: "photo-to-3d",
    number: "05",
    name: "Single Photo → 3D Model",
    subtitle: "Spatial 3D Reconstruction in VR",
    category: "EXPERIMENTS",
    badge: "🥈 9 HACKS 2ND RUNNER-UP",
    tech: ["Depth Estimation", "WebGL", "Three.js", "VR Viewer"],
    shortSummary: "Reconstructs interactive 3D point clouds and depth meshes from a single 2D photo in VR.",
    description: "An end-to-end spatial computing pipeline that takes a single 2D photograph, predicts dense monocular depth maps, generates an interactive 3D textured mesh, and renders it directly inside an immersive WebXR/VR environment.",
    metric: {
      value: "🥈 2nd Place",
      label: "9 Hacks Hackathon",
    },
    workflow: [
      "Single 2D image upload & color normalization",
      "Monocular depth estimation (Z-axis elevation mapping)",
      "Three.js 3D point cloud & textured mesh generation",
      "WebXR integration for interactive headset / VR exploration",
    ],
    bullets: [
      "Awarded 2nd Runner-Up at the 9 Hacks Hackathon out of dozens of university teams.",
      "Engineered automatic mesh triangulation with over 48,000 vertices from single-perspective inputs.",
      "Integrated full gyroscope and mouse parallax tilt controls for seamless web preview.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "photo3d",
  },
  {
    id: "kaal-chakra",
    number: "06",
    name: "Kaal-Chakra",
    subtitle: "Interactive IoT Board Game",
    category: "HARDWARE",
    badge: "HARDWARE + SOFTWARE",
    tech: ["ESP32", "C++", "Hall Sensors", "Servo Motors", "WebSockets"],
    shortSummary: "Cyber-physical board game bridging physical pieces and sensor arrays with a synchronized web engine.",
    description: "A tangible, interactive cyber-physical board game bridging physical tactile interaction with a dynamic web state engine. Links an ESP32 microcontroller, Hall-effect sensors, and servo motors with a real-time web dashboard over low-latency WebSockets.",
    metric: {
      value: "Sub-100ms",
      label: "hardware-web sync",
    },
    workflow: [
      "Physical piece placement on magnetic tile grid",
      "Hall-effect sensor triggers ESP32 GPIO interrupt",
      "Bi-directional WebSocket packet transmitted to Web UI",
      "Servo motor actuation rotates mechanical board rings",
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
    number: "07",
    name: "CodeMentor.ai",
    subtitle: "AI Debugging Platform",
    category: "AI / ML",
    tech: ["TypeScript", "Next.js", "AST Analysis", "Gemini API", "FastAPI"],
    shortSummary: "AST static analysis tool detecting silent runtime race conditions and unhandled async promises.",
    description: "An AI-powered debugging environment that analyzes code ASTs to identify silent logic bugs, unhandled async promises, and offers one-click validated fixes with side-by-side patch diffs.",
    metric: {
      value: "Real-time",
      label: "AST static analysis",
    },
    workflow: [
      "Code parsing into Abstract Syntax Tree (AST) nodes",
      "Static detection of unresolved Promises & error boundaries",
      "Gemini AST synthesis formulating deterministic code diff",
      "Interactive one-click patch application",
    ],
    bullets: [
      "Extracts Abstract Syntax Tree nodes to pinpoint race conditions and unhandled error boundaries before execution.",
      "Generates precise side-by-side patch diffs rather than generic conversational advice.",
      "Synthesizes unit test recommendations targeting identified edge cases.",
    ],
    githubUrl: "https://github.com/gnana2007",
    demoType: "codementor",
  },
  {
    id: "keno",
    number: "08",
    name: "Keno",
    subtitle: "Interactive Piano Learning Platform",
    category: "FULL STACK",
    tech: ["React.js", "FastAPI", "Python", "Scikit-learn", "Web Audio API"],
    shortSummary: "Guided keyboard tutor converting songs into adaptive exercises with ML difficulty scaling.",
    description: "Converts songs into guided interactive keyboard exercises and tracks performance metrics like accuracy, tempo consistency, and reaction delay with ML-based adaptive difficulty scaling.",
    metric: {
      value: "ML-Based",
      label: "difficulty scaling",
    },
    workflow: [
      "MIDI / Song Sheet Ingestion & note mapping",
      "Interactive Guided Playalong with Web Audio polyphony",
      "Scikit-learn performance scoring & tempo curve analysis",
      "Dynamic adaptive progression recommendations",
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
    number: "09",
    name: "Recipora",
    subtitle: "Ingredient-Based Recipe Discovery",
    category: "FULL STACK",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB", "Cosine Similarity"],
    shortSummary: "Zero-waste culinary discovery finding delicious recipes matching existing pantry staples.",
    description: "Suggests zero-waste recipes based on pantry ingredients you already have, using semantic search and ingredient-similarity matching to cut household grocery waste.",
    metric: {
      value: "Zero-Waste",
      label: "pantry optimizer",
    },
    workflow: [
      "Input available pantry produce & expiration dates",
      "Vector similarity & ingredient matching across thousands of dishes",
      "Ranked zero-waste recipe options with substitution recommendations",
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
      { name: "MediaPipe", usedIn: "TimeSensei & Air Drawing" },
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
    answer: "PlantWise is an AI-powered semantic search engine for botanical knowledge indexing over 21,150+ plant documents. It uses Sentence Transformers and ChromaDB to answer complex natural-language queries by extracting relevant vector chunks and synthesizing answers with Gemini.",
    relatedProject: "plantwise",
  },
  {
    question: "Tell me about Air Drawing.",
    answer: "Air Drawing Canvas is a contactless computer vision project built with OpenCV and MediaPipe. It tracks the 3D tip of your index finger to draw smooth vector lines on screen without touching any glass or mouse.",
    relatedProject: "air-drawing",
  },
  {
    question: "What did she win at 9 Hacks?",
    answer: "Gnanada won 2nd Runner-Up at the 9 Hacks Hackathon for engineering 'Single Photo → 3D Model', which converts a single 2D image into an interactive 3D textured mesh and brings it into an immersive VR viewer.",
    relatedProject: "photo-to-3d",
  },
  {
    question: "Which projects use AI?",
    answer: "Several projects feature custom AI pipelines: PlantWise uses Sentence Transformers and ChromaDB for vector RAG; TeachMeWrong uses a reverse-pedagogy LLM feedback loop; CodeMentor.ai uses AST graph extraction with Gemini; and TimeSensei & Air Drawing use MediaPipe & OpenCV for real-time vision classification.",
    relatedProject: "plantwise",
  },
  {
    question: "What technologies does Gnanada use?",
    answer: "Gnanada works across Python (FastAPI, scikit-learn, OpenCV, ChromaDB, Sentence Transformers), Full-Stack TypeScript (React, Next.js, Node.js, Express, Tailwind CSS), Databases (PostgreSQL, Supabase, MongoDB), and Hardware/IoT (ESP32 microcontrollers, sensors, motors, C++).",
  },
  {
    question: "Tell me about the hardware projects.",
    answer: "Kaal-Chakra is an interactive cyber-physical IoT board game. It connects an ESP32 microcontroller, Hall-effect sensors, and servo motors with a real-time web dashboard over low-latency WebSockets.",
    relatedProject: "kaal-chakra",
  },
  {
    question: "Which project demonstrates computer vision?",
    answer: "TimeSensei is a computer vision productivity system (<28ms latency) tracking ergonomic posture and gestures. Air Drawing Canvas enables touchless in-air finger sketching using MediaPipe landmarks.",
    relatedProject: "timesensei",
  },
  {
    question: "What is TeachMeWrong?",
    answer: "TeachMeWrong is an active-recall AI system that flips traditional tutoring. Instead of explaining things to you, it intentionally misunderstands concepts with believable flaws, challenging you to detect and correct them to prove true mastery.",
    relatedProject: "teachmewrong",
  },
  {
    question: "Where does Gnanada study?",
    answer: "Gnanada is currently pursuing her B.Tech in Computer Science and Engineering at SRM University-AP (CGPA 8.6/10) and is an active research member at Next Tech Lab (NTL).",
  },
];
