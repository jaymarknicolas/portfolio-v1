import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  Sparkles,
  Code2,
  Laptop,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/data/experiences";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./SectionLink";
import { Button } from "@/components/ui/button";

interface StickyExperienceScrollProps {
  experiences: Experience[];
}

const typeConfig = {
  work: {
    icon: Briefcase,
    color: "from-[#FF4D00] to-[#FF6B35]",
    bgColor: "bg-[#FF4D00]/10",
    borderColor: "border-[#FF4D00]/30",
    textColor: "text-[#FF4D00]",
  },
  freelance: {
    icon: Laptop,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    textColor: "text-green-500",
  },
  education: {
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-500",
  },
  achievement: {
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-500",
  },
  milestone: {
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-500",
  },
};

function RevealItem({
  exp,
  index,
  progress,
  total,
}: {
  exp: Experience;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const config = typeConfig[exp.type];
  const Icon = config.icon;

  // Each item reveals at its segment of the scroll progress
  // Item 0 reveals at 0, item 1 at 1/total, etc.
  const revealAt = index / total;
  const revealEnd = revealAt + 0.8 / total;

  const opacity = useTransform(progress, [revealAt, revealEnd], [0, 1]);
  const y = useTransform(progress, [revealAt, revealEnd], [30, 0]);
  const scale = useTransform(progress, [revealAt, revealEnd], [0.96, 1]);
  const blurVal = useTransform(progress, [revealAt, revealEnd], [4, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.div
      style={{ opacity, y, scale, filter }}
      className="relative pl-14 group"
    >
      {/* Timeline node */}
      <div
        className={cn(
          "absolute left-0 w-[30px] h-[30px] rounded-lg flex items-center justify-center bg-gradient-to-br",
          config.color,
          index === 0 && "shadow-md shadow-[#FF4D00]/30"
        )}
      >
        <Icon className="h-4 w-4 text-white" />
        {exp.current && (
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
          </span>
        )}
      </div>

      {/* Content Card */}
      <div className="glass-card rounded-xl p-4 glass-card-hover">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-foreground group-hover:text-[#FF4D00] transition-colors">
              {exp.role}
            </h3>
            <p className="text-xs text-muted-foreground truncate">
              {exp.company}
            </p>
          </div>
          <span
            className={cn(
              "px-2 py-0.5 rounded-full text-[10px] font-medium font-mono shrink-0",
              config.bgColor,
              config.textColor,
              "border",
              config.borderColor
            )}
          >
            {exp.period}
          </span>
        </div>

        {exp.description && (
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed line-clamp-2">
            {exp.description}
          </p>
        )}

        {exp.highlights && exp.highlights.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {exp.highlights.map((highlight, i) => (
              <span
                key={i}
                className="px-1.5 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground font-mono"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function StickyExperienceScroll({
  experiences,
}: StickyExperienceScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = experiences.length;

  // Header fades in quickly at the start
  const headerOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.06], [12, 0]);

  // "Journey continues" reveals after the last item
  const journeyRevealAt = total / (total + 0.5);
  const journeyOpacity = useTransform(scrollYProgress, [journeyRevealAt, 1], [0, 1]);
  const journeyY = useTransform(scrollYProgress, [journeyRevealAt, 1], [30, 0]);
  const journeyScale = useTransform(scrollYProgress, [journeyRevealAt, 1], [0.96, 1]);
  const journeyBlur = useTransform(scrollYProgress, [journeyRevealAt, 1], [4, 0]);
  const journeyFilter = useTransform(journeyBlur, (v) => `blur(${v}px)`);

  return (
    <div
      ref={containerRef}
      // Tall container: each item gets ~60vh of scroll space
      style={{ height: `${(total + 1) * 60}vh` }}
      className="relative"
    >
      {/* Sticky panel pinned to screen */}
      <div className="sticky top-0 min-h-screen flex flex-col pt-20 pb-8">
        {/* Header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="flex justify-between items-start mb-4 flex-shrink-0"
        >
          <SectionHeading label="career" title="Experience" subtitle="& Education" />
          <SectionLink to="/experience" sectionId="experience-section">
            <Button
              variant="outline"
              size="sm"
              className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group font-mono text-xs"
            >
              <Briefcase className="h-3.5 w-3.5 mr-1.5 group-hover:text-[#FF4D00] transition-colors" />
              view_all()
            </Button>
          </SectionLink>
        </motion.div>

        {/* Timeline list - items reveal one by one */}
        <div className="relative flex-1">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF4D00] via-border/50 to-transparent" />

          <div className="space-y-3">
            {experiences.map((exp, index) => (
              <RevealItem
                key={index}
                exp={exp}
                index={index}
                progress={scrollYProgress}
                total={total}
              />
            ))}

            {/* Journey continues */}
            <motion.div
              style={{ opacity: journeyOpacity, y: journeyY, scale: journeyScale, filter: journeyFilter }}
              className="relative pl-14"
            >
              <div className="absolute left-0 w-[30px] h-[30px] rounded-lg flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 border border-border">
                <Code2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-xs text-muted-foreground italic pt-1.5 font-mono">
                The journey continues...
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
