import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, Sparkles, Code2, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/data/experiences";

interface ExperienceTimelineProps {
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

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF4D00] via-border/50 to-transparent" />

      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const config = typeConfig[exp.type];
          const Icon = config.icon;
          const isFirst = index === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-14 group"
            >
              {/* Timeline node */}
              <div
                className={cn(
                  "absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br",
                  config.color,
                  isFirst && "shadow-lg shadow-[#FF4D00]/30"
                )}
              >
                <Icon className="h-5 w-5 text-white" />
                {exp.current && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background">
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                  </span>
                )}
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-xl p-4 glass-card-hover">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-[#FF4D00] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium shrink-0",
                      config.bgColor,
                      config.textColor,
                      "border",
                      config.borderColor
                    )}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                {exp.description && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.description}
                  </p>
                )}

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Journey Start Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: experiences.length * 0.1 }}
          className="relative pl-14"
        >
          <div className="absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 border border-border">
            <Code2 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-sm text-muted-foreground italic pt-2">
            The journey continues...
          </div>
        </motion.div>
      </div>
    </div>
  );
}
