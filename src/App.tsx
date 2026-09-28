import { useState } from "react";
import BackgroundGlow from "./components/BackgroundGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Lab from "./components/Lab";
import TechStack from "./components/TechStack";
import BuildProcess from "./components/BuildProcess";
import Achievements from "./components/Achievements";
import About from "./components/About";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import ResumeCard from "./components/ResumeCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioAssistant from "./components/PortfolioAssistant";
import { projects } from "./data/content";
import type { Project } from "./data/content";

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const handleSelectProjectById = (id: string) => {
    const found = projects.find((p) => p.id === id);
    if (found) {
      setActiveProject(found);
      const el = document.getElementById("work");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-lagoon-bg text-lagoon-deep font-body antialiased selection:bg-lagoon-accent/25 selection:text-lagoon-primary">
      {/* Background Lagoon Ambience & Cursor Glow */}
      <BackgroundGlow />

      {/* Sticky Minimal Navigation */}
      <Nav
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Main Flow */}
      <main className="relative z-10">
        <Hero />
        <Intro />
        <Projects onSelectProject={setActiveProject} />
        <Lab />
        <TechStack />
        <BuildProcess />
        <Achievements />
        <About />
        <CurrentlyBuilding />
        <ResumeCard
          isOpenModal={isResumeOpen}
          onOpenModal={() => setIsResumeOpen(true)}
          onCloseModal={() => setIsResumeOpen(false)}
        />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
      <ProjectDetail
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Floating AI Portfolio Assistant */}
      <PortfolioAssistant
        isOpen={isAssistantOpen}
        onOpen={() => setIsAssistantOpen(true)}
        onClose={() => setIsAssistantOpen(false)}
        onSelectProject={handleSelectProjectById}
      />
    </div>
  );
}
