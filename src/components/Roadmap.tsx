import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Rocket, Target, Lightbulb, Code2, Brain, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  category: "skill" | "project" | "goal" | "learning";
  date?: string;
  highlights?: string[];
}

interface RoadmapProps {
  items: RoadmapItem[];
}

const categoryIcons = {
  skill: Code2,
  project: Rocket,
  goal: Target,
  learning: Brain,
};

const categoryColors = {
  skill: "from-blue-500 to-cyan-500",
  project: "from-[#FF4D00] to-[#FF6B35]",
  goal: "from-purple-500 to-pink-500",
  learning: "from-green-500 to-emerald-500",
};

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    label: "Completed",
    pulse: false,
  },
  "in-progress": {
    icon: Circle,
    color: "text-[#FF4D00]",
    bgColor: "bg-[#FF4D00]/10",
    borderColor: "border-[#FF4D00]/30",
    label: "In Progress",
    pulse: true,
  },
  upcoming: {
    icon: Lightbulb,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    borderColor: "border-muted-foreground/30",
    label: "Upcoming",
    pulse: false,
  },
};

export function Roadmap({ items }: RoadmapProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, 3);

  return (
    <div className="relative">
      {/* Compact Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => {
            const StatusIcon = statusConfig[item.status].icon;
            const CategoryIcon = categoryIcons[item.category];
            const config = statusConfig[item.status];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
                className="glass-card rounded-xl p-4 glass-card-hover group relative overflow-hidden"
              >
                {/* Category accent line */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r",
                    categoryColors[item.category]
                  )}
                />

                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2 mt-1">
                  <div className="flex items-center gap-2 min-w-0">
                    {/* Category icon */}
                    <div
                      className={cn(
                        "p-1.5 rounded-md bg-gradient-to-br flex-shrink-0",
                        categoryColors[item.category]
                      )}
                    >
                      <CategoryIcon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-[#FF4D00] transition-colors truncate">
                      {item.title}
                    </h4>
                  </div>

                  {/* Status indicator */}
                  <div
                    className={cn(
                      "flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium flex-shrink-0",
                      config.bgColor,
                      config.color,
                      config.pulse && "animate-pulse"
                    )}
                  >
                    <StatusIcon className="h-2.5 w-2.5" />
                    <span className="hidden sm:inline">{config.label}</span>
                  </div>
                </div>

                {/* Date */}
                {item.date && (
                  <span className="text-[10px] text-muted-foreground block mb-2">{item.date}</span>
                )}

                {/* Description */}
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {item.highlights.slice(0, 3).map((highlight, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                    {item.highlights.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground">
                        +{item.highlights.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Show More/Less Button */}
      {items.length > 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#FF4D00] glass-card rounded-full hover:border-[#FF4D00]/50 transition-all duration-300 group"
          >
            {isExpanded ? (
              <>
                Show Less
                <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                Show {items.length - 3} More
                <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
}
