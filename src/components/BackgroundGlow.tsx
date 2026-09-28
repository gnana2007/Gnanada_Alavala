import { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle fixed ambient lagoon gradient blobs */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(57, 184, 176, 0.16) 0%, rgba(11, 114, 133, 0.05) 50%, transparent 80%)",
        }}
      />
      <div 
        className="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[160px] opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(20, 145, 155, 0.14) 0%, rgba(57, 184, 176, 0.04) 60%, transparent 80%)",
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[140px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(11, 114, 133, 0.12) 0%, rgba(57, 184, 176, 0.03) 70%, transparent 80%)",
        }}
      />

      {/* Subtle cursor-following lagoon glow */}
      {isVisible && (
        <div
          className="fixed rounded-full pointer-events-none transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: `translate3d(${mousePos.x - 250}px, ${mousePos.y - 250}px, 0)`,
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(57, 184, 176, 0.11) 0%, rgba(11, 114, 133, 0.03) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      )}

      {/* Ultra subtle grid overlay */}
      <div className="absolute inset-0 subtle-grid opacity-60" />
    </div>
  );
}
