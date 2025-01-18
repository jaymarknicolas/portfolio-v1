import { Badge } from "@/components/ui/badge";
import {
  CodepenIcon as ReactIcon,
  Database,
  Server,
  Cloud,
  Code,
  Box,
  Layout,
  Terminal,
  Globe,
  DockIcon as Docker,
} from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  { name: "React", icon: <ReactIcon className="w-4 h-4" /> },
  { name: "Next.js", icon: <Globe className="w-4 h-4" /> },
  { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
  { name: "Node.js", icon: <Server className="w-4 h-4" /> },
  { name: "PHP", icon: <Terminal className="w-4 h-4" /> },
  { name: "Laravel", icon: <Box className="w-4 h-4" /> },
  { name: "Wordpress", icon: <Cloud className="w-4 h-4" /> },
  { name: "React Native", icon: <Docker className="w-4 h-4" /> },
  { name: "Angular", icon: <Layout className="w-4 h-4" /> },
  { name: "Prisma ORM", icon: <Cloud className="w-4 h-4" /> },
  { name: "MySQL", icon: <Database className="w-4 h-4" /> },
  { name: "Shopify", icon: <Database className="w-4 h-4" /> },
  { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
  { name: "CodeIgniter", icon: <Database className="w-4 h-4" /> },
  { name: "Java", icon: <Database className="w-4 h-4" /> },
  { name: "Spring Boot", icon: <Database className="w-4 h-4" /> },
  { name: "Python", icon: <Database className="w-4 h-4" /> },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {techStack.map((tech, index) => (
        <Badge
          key={index}
          variant="outline"
          className="px-3 py-2 text-sm border-[#2A2A2A] bg-[#1A1A1A] hover:bg-[#2A2A2A] text-gray-300 flex items-center gap-2"
        >
          {tech.icon}
          {tech.name}
        </Badge>
      ))}
    </div>
  );
}
