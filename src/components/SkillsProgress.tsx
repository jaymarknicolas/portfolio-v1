import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
}

const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript / JavaScript", level: 92, category: "frontend" },
  { name: "Svelte / SvelteKit", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Vue.js / Angular", level: 75, category: "frontend" },
  // Backend
  { name: "Laravel / PHP", level: 90, category: "backend" },
  { name: "Node.js / Express", level: 82, category: "backend" },
  { name: "GraphQL / Apollo", level: 88, category: "backend" },
  { name: "PostgreSQL / MySQL", level: 88, category: "backend" },
  { name: "Prisma ORM", level: 90, category: "backend" },
  // Tools
  { name: "Git / GitHub", level: 92, category: "tools" },
  { name: "Electron.js", level: 80, category: "tools" },
  { name: "React Native / Ionic", level: 82, category: "tools" },
  { name: "WordPress (Themes & Plugins)", level: 90, category: "tools" },
  { name: "Firebase", level: 78, category: "tools" },
  // Design
  { name: "Figma", level: 88, category: "design" },
  { name: "UI/UX Design", level: 85, category: "design" },
  { name: "Responsive Design", level: 95, category: "design" },
  { name: "Design Systems", level: 82, category: "design" },
];

const categoryColors = {
  frontend: "from-[#FF4D00] to-[#FF6B35]",
  backend: "from-blue-500 to-cyan-500",
  tools: "from-purple-500 to-pink-500",
  design: "from-green-500 to-emerald-500",
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Mobile",
  design: "Design",
};

export function SkillsProgress() {
  const categories = ["frontend", "backend", "tools", "design"] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-xl p-5 glass-card-hover"
        >
          <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
            <span
              className={cn(
                "w-2.5 h-2.5 rounded-full bg-gradient-to-r",
                categoryColors[category]
              )}
            />
            {categoryLabels[category]}
          </h3>
          <div className="space-y-3">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        categoryColors[category]
                      )}
                    />
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
