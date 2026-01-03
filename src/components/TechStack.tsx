import { Badge } from "@/components/ui/badge";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiElectron, SiTypescript } from "react-icons/si";
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
import { GrGraphQl } from "react-icons/gr";
import { RiSvelteFill } from "react-icons/ri";
import { SiStorybook } from "react-icons/si";
import { SiRedux } from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  { name: "React", icon: <RiReactjsFill className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Next.js", icon: <RiNextjsFill className="w-4 h-4 max-w-[3rem]" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-4 h-4 max-w-[3rem]" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 max-w-[3rem]" /> },
  { name: "PHP", icon: <SiPhp className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Laravel", icon: <FaLaravel className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Wordpress", icon: <FaWordpress className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Wix", icon: <TbBrandWix className="w-4 h-4 max-w-[3rem]" /> },
  {
    name: "React Native",
    icon: <TbBrandReactNative className="w-4 h-4 max-w-[3rem]" />,
  },
  { name: "Angular", icon: <FaAngular className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="w-4 h-4 max-w-[3rem]" /> },
  { name: "MySQL", icon: <TbBrandMysql className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Shopify", icon: <FaShopify className="w-4 h-4 max-w-[3rem]" /> },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql className="w-4 h-4 max-w-[3rem]" />,
  },
  {
    name: "CodeIgniter",
    icon: <DiCodeigniter className="w-4 h-4 max-w-[3rem]" />,
  },
  { name: "Java", icon: <FaJava className="w-4 h-4 max-w-[3rem]" /> },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot className="w-4 h-4 max-w-[3rem]" />,
  },
  { name: "Python", icon: <FaPython className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Ionic", icon: <IoLogoIonic className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Sass", icon: <FaSass className="w-4 h-4 max-w-[3rem]" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="w-4 h-4 max-w-[3rem]" />,
  },
  { name: "Bootstrap", icon: <FaBootstrap className="w-4 h-4 max-w-[3rem]" /> },
  { name: "GraphQL", icon: <GrGraphQl className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Svelte", icon: <RiSvelteFill className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Storybook", icon: <SiStorybook className="w-4 h-4 max-w-[3rem]" /> },
  { name: "Redux", icon: <SiRedux className="w-4 h-4 max-w-[3rem]" /> },
  { name: "ElectronJS", icon: <SiElectron className="w-4 h-4 max-w-[3rem]" /> },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
      {techStack.map((tech, index) => (
        <Badge
          key={index}
          variant="outline"
          className="px-3 py-2 text-sm border-[#2A2A2A] bg-foreground/5 dark:bg-[#1A1A1A] hover:bg-foreground/10 dark:hover:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 flex items-center gap-2"
        >
          {tech.icon}
          {tech.name}
        </Badge>
      ))}
    </div>
  );
}
