import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Icons
import { RiReactjsFill, RiNextjsFill, RiTailwindCssFill, RiSvelteFill, RiSupabaseFill } from "react-icons/ri";
import { SiElectron, SiTypescript, SiPhp, SiPrisma, SiStorybook, SiRedux } from "react-icons/si";
import { FaNodeJs, FaLaravel, FaWordpress, FaAngular, FaShopify, FaJava, FaPython, FaSass, FaBootstrap } from "react-icons/fa";
import { TbBrandWix, TbBrandReactNative, TbBrandMysql } from "react-icons/tb";
import { DiPostgresql, DiCodeigniter } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoIonic } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "database" | "tools";
}

export const techStack: TechItem[] = [
  // Frontend
  { name: "React", icon: <RiReactjsFill className="w-4 h-4" />, category: "frontend" },
  { name: "Next.js", icon: <RiNextjsFill className="w-4 h-4" />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" />, category: "frontend" },
  { name: "React Native", icon: <TbBrandReactNative className="w-4 h-4" />, category: "frontend" },
  { name: "Angular", icon: <FaAngular className="w-4 h-4" />, category: "frontend" },
  { name: "Svelte", icon: <RiSvelteFill className="w-4 h-4" />, category: "frontend" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-4 h-4" />, category: "frontend" },
  { name: "Sass", icon: <FaSass className="w-4 h-4" />, category: "frontend" },
  { name: "Bootstrap", icon: <FaBootstrap className="w-4 h-4" />, category: "frontend" },
  { name: "Redux", icon: <SiRedux className="w-4 h-4" />, category: "frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="w-4 h-4" />, category: "backend" },
  { name: "PHP", icon: <SiPhp className="w-4 h-4" />, category: "backend" },
  { name: "Laravel", icon: <FaLaravel className="w-4 h-4" />, category: "backend" },
  { name: "Python", icon: <FaPython className="w-4 h-4" />, category: "backend" },
  { name: "Java", icon: <FaJava className="w-4 h-4" />, category: "backend" },
  { name: "Spring Boot", icon: <BiLogoSpringBoot className="w-4 h-4" />, category: "backend" },
  { name: "GraphQL", icon: <GrGraphQl className="w-4 h-4" />, category: "backend" },
  { name: "CodeIgniter", icon: <DiCodeigniter className="w-4 h-4" />, category: "backend" },

  // Database
  { name: "PostgreSQL", icon: <DiPostgresql className="w-4 h-4" />, category: "database" },
  { name: "MySQL", icon: <TbBrandMysql className="w-4 h-4" />, category: "database" },
  { name: "Prisma ORM", icon: <SiPrisma className="w-4 h-4" />, category: "database" },
  { name: "Supabase", icon: <RiSupabaseFill className="w-4 h-4" />, category: "database" },

  // Tools & Platforms
  { name: "WordPress", icon: <FaWordpress className="w-4 h-4" />, category: "tools" },
  { name: "Shopify", icon: <FaShopify className="w-4 h-4" />, category: "tools" },
  { name: "Wix", icon: <TbBrandWix className="w-4 h-4" />, category: "tools" },
  { name: "ElectronJS", icon: <SiElectron className="w-4 h-4" />, category: "tools" },
  { name: "Ionic", icon: <IoLogoIonic className="w-4 h-4" />, category: "tools" },
  { name: "Storybook", icon: <SiStorybook className="w-4 h-4" />, category: "tools" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredTech =
    activeCategory === "all"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <div className="space-y-4">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category.id
                ? "tab-active"
                : "tab-inactive"
            )}
          >
            {category.label}
            {category.id !== "all" && (
              <span className="ml-1.5 text-xs opacity-70">
                ({techStack.filter((t) => t.category === category.id).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tech badges grid */}
      <motion.div
        layout
        className="grid grid-cols-2 lg:grid-cols-3 gap-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Badge
                variant="outline"
                className="w-full px-3 py-2.5 text-sm glass-card hover:border-[#FF4D00]/30 hover:bg-[#FF4D00]/5 text-muted-foreground hover:text-foreground flex items-center gap-2 transition-all duration-300 cursor-default badge-glow"
              >
                <span className="text-[#FF4D00]">{tech.icon}</span>
                {tech.name}
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
