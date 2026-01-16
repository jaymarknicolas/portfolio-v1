import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  description: string;
  url?: string;
  techStack?: string[];
  desktopImage?: string;
  mobileImage?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeView, setActiveView] = useState<"desktop" | "mobile">("desktop");
  const [isHovering, setIsHovering] = useState(false);

  const handlePreviewClick = () => {
    if (project.url) window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-2xl overflow-hidden card-lift"
    >
      {/* Device Preview Section */}
      <div
        className={`relative bg-gradient-to-br from-muted/50 to-muted p-6 pb-0 ${
          project.url ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        onClick={handlePreviewClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* View Toggle */}
        <div className="absolute top-4 right-4 flex gap-1 bg-background/80 backdrop-blur-sm rounded-full p-1 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveView("desktop");
            }}
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              activeView === "desktop"
                ? "bg-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/30"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label="Desktop view"
          >
            <Monitor className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveView("mobile");
            }}
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              activeView === "mobile"
                ? "bg-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/30"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label="Mobile view"
          >
            <Smartphone className="h-4 w-4" />
          </button>
        </div>

        {/* Hover overlay with "View Project" hint */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovering ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-[5] flex items-center justify-center pointer-events-none"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4D00] text-white font-medium shadow-lg">
            <ExternalLink className="h-4 w-4" />
            View Project
          </div>
        </motion.div>

        {/* Device Mockups */}
        <div className="relative h-[200px] flex items-end justify-center overflow-hidden">
          {/* Desktop Mockup */}
          <motion.div
            initial={false}
            animate={{
              opacity: activeView === "desktop" ? 1 : 0,
              scale: activeView === "desktop" ? (isHovering ? 1.05 : 1) : 0.9,
              x: activeView === "desktop" ? 0 : -20,
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute bottom-0 w-full max-w-[320px]",
              activeView !== "desktop" && "pointer-events-none"
            )}
          >
            {/* Desktop Frame */}
            <div className="relative">
              {/* Screen bezel */}
              <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-t-lg p-1 pb-0">
                {/* Camera dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3a3a3a]" />
                {/* Screen */}
                <div className="bg-[#1a1a1a] rounded-t overflow-hidden">
                  {project.desktopImage ? (
                    <img
                      src={project.desktopImage}
                      alt={`${project.name} desktop preview`}
                      className={cn(
                        "w-full h-[140px] object-cover object-top transition-transform duration-500",
                        isHovering && "scale-110"
                      )}
                    />
                  ) : (
                    <div className="w-full h-[140px] bg-gradient-to-br from-[#FF4D00]/20 via-background to-[#FF6B35]/20 flex items-center justify-center">
                      <div className="text-center">
                        <Monitor className="h-8 w-8 mx-auto text-[#FF4D00]/50 mb-2" />
                        <span className="text-xs text-muted-foreground">
                          Desktop Preview
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Stand */}
              <div className="flex justify-center">
                <div className="w-20 h-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-sm" />
              </div>
              <div className="flex justify-center">
                <div className="w-28 h-2 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] rounded-b-lg" />
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            initial={false}
            animate={{
              opacity: activeView === "mobile" ? 1 : 0,
              scale: activeView === "mobile" ? (isHovering ? 1.05 : 1) : 0.9,
              x: activeView === "mobile" ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute bottom-0",
              activeView !== "mobile" && "pointer-events-none"
            )}
          >
            {/* Phone Frame */}
            <div className="relative w-[100px]">
              <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[1.5rem] p-1">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#1a1a1a] rounded-full z-10" />
                {/* Screen */}
                <div className="bg-[#1a1a1a] rounded-[1.25rem] overflow-hidden">
                  {project.mobileImage ? (
                    <img
                      src={project.mobileImage}
                      alt={`${project.name} mobile preview`}
                      className={cn(
                        "w-full h-[180px] object-cover object-top transition-transform duration-500",
                        isHovering && "scale-110"
                      )}
                    />
                  ) : (
                    <div className="w-full h-[180px] bg-gradient-to-br from-[#FF4D00]/20 via-background to-[#FF6B35]/20 flex items-center justify-center">
                      <div className="text-center">
                        <Smartphone className="h-6 w-6 mx-auto text-[#FF4D00]/50 mb-1" />
                        <span className="text-[10px] text-muted-foreground">
                          Mobile
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#3a3a3a] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-[#FF4D00] transition-colors">
            {project.name}
          </h3>
          <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs rounded-full bg-[#FF4D00]/10 text-[#FF4D00] border border-[#FF4D00]/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm text-[#FF4D00] hover:text-[#FF6B35] transition-colors group/link ${
            project.url ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          <span>View Project</span>
        </a>
      </div>
    </motion.div>
  );
}
