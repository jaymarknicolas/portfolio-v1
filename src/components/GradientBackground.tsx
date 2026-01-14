import { useEffect, useRef } from "react";

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGradient = () => {
      time += 0.002;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      // Animate gradient colors slightly
      const hue1 = 18 + Math.sin(time) * 5; // Orange range
      const hue2 = 25 + Math.cos(time * 0.7) * 5;

      gradient.addColorStop(0, `hsla(${hue1}, 100%, 50%, 0.03)`);
      gradient.addColorStop(0.5, "transparent");
      gradient.addColorStop(1, `hsla(${hue2}, 100%, 50%, 0.03)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating orbs
      const orbs = [
        {
          x: canvas.width * 0.2 + Math.sin(time * 0.5) * 100,
          y: canvas.height * 0.3 + Math.cos(time * 0.3) * 80,
          radius: 200,
          color: "rgba(255, 77, 0, 0.04)",
        },
        {
          x: canvas.width * 0.8 + Math.cos(time * 0.4) * 120,
          y: canvas.height * 0.6 + Math.sin(time * 0.5) * 100,
          radius: 250,
          color: "rgba(255, 107, 53, 0.03)",
        },
        {
          x: canvas.width * 0.5 + Math.sin(time * 0.6) * 80,
          y: canvas.height * 0.8 + Math.cos(time * 0.4) * 60,
          radius: 180,
          color: "rgba(255, 140, 90, 0.03)",
        },
      ];

      orbs.forEach((orb) => {
        const orbGradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        orbGradient.addColorStop(0, orb.color);
        orbGradient.addColorStop(1, "transparent");

        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawGradient);
    };

    resize();
    window.addEventListener("resize", resize);

    // Clear canvas on each frame to prevent accumulation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGradient();
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

// Simplified static gradient for better performance
export function StaticGradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/[0.02] via-transparent to-[#FF6B35]/[0.02]" />

      {/* Animated orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] bg-[#FF4D00]/30 top-[10%] left-[10%]"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="gradient-orb w-[600px] h-[600px] bg-[#FF6B35]/20 top-[50%] right-[5%]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] bg-[#FF8C5A]/25 bottom-[10%] left-[30%]"
        style={{ animationDelay: "-10s" }}
      />

      {/* Noise texture */}
      <div className="noise-overlay" />
    </div>
  );
}
