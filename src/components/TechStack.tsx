import { Badge } from "@/components/ui/badge";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { TbBrandWix } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  { name: "React", icon: <RiReactjsFill className="w-4 h-4" /> },
  { name: "Next.js", icon: <RiNextjsFill className="w-4 h-4" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-4 h-4" /> },
  { name: "PHP", icon: <SiPhp className="w-4 h-4" /> },
  { name: "Laravel", icon: <FaLaravel className="w-4 h-4" /> },
  { name: "Wordpress", icon: <FaWordpress className="w-4 h-4" /> },
  { name: "Wix", icon: <TbBrandWix className="w-4 h-4" /> },
  { name: "React Native", icon: <TbBrandReactNative className="w-4 h-4" /> },
  { name: "Angular", icon: <FaAngular className="w-4 h-4" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="w-4 h-4" /> },
  { name: "MySQL", icon: <TbBrandMysql className="w-4 h-4" /> },
  { name: "Shopify", icon: <FaShopify className="w-4 h-4" /> },
  { name: "PostgreSQL", icon: <DiPostgresql className="w-4 h-4" /> },
  { name: "CodeIgniter", icon: <DiCodeigniter className="w-4 h-4" /> },
  { name: "Java", icon: <FaJava className="w-4 h-4" /> },
  { name: "Spring Boot", icon: <BiLogoSpringBoot className="w-4 h-4" /> },
  { name: "Python", icon: <FaPython className="w-4 h-4" /> },
  { name: "Ionic", icon: <IoLogoIonic className="w-4 h-4" /> },
  { name: "Sass", icon: <FaSass className="w-4 h-4" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-4 h-4" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="w-4 h-4" /> },
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
