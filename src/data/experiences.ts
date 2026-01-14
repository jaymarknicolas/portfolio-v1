export interface Experience {
  role: string;
  company: string;
  period: string;
  type: "work" | "education" | "milestone" | "achievement" | "freelance";
  description?: string;
  highlights?: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Intermediate Frontend Engineer",
    company: "Scaleforge",
    period: "Jun 2025 - Present",
    type: "work",
    current: true,
    description: "Building scalable web & desktop apps with Next.js, Svelte, TypeScript, and Electron.js. Optimizing for Core Web Vitals and collaborating on design systems.",
    highlights: ["Next.js", "Svelte", "Electron.js", "TypeScript"],
  },
  {
    role: "Junior Web Developer",
    company: "Syntactics Inc.",
    period: "Jul 2022 - Jun 2025",
    type: "work",
    description: "Developed responsive web apps using Next.js, React, Laravel, and WordPress. Built mobile apps with Ionic and React Native. Recognized with company awards for innovation.",
    highlights: ["React", "Laravel", "WordPress", "React Native"],
  },
  {
    role: "Freelance Web & Software Developer",
    company: "Self-Employed",
    period: "May 2022 - Present",
    type: "freelance",
    description: "Built full-stack apps with Next.js, GraphQL, Prisma, and PostgreSQL. Created POS systems, construction monitoring tools, and job portals for clients.",
    highlights: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
  },
  {
    role: "WordPress Developer & UI/UX Designer",
    company: "EFAM International Internship - UNWPA, Japan",
    period: "Feb - May 2022",
    type: "achievement",
    description: "Developed official website for UN World Peace Association. Designed responsive templates in Figma and built custom WordPress functionalities.",
    highlights: ["WordPress", "Figma", "PHP", "UI/UX Design"],
  },
  {
    role: "Graduated Cum Laude",
    company: "BS Information Technology - Central Mindanao University",
    period: "Aug 2018 - Jun 2022",
    type: "achievement",
    description: "Graduated with Latin honors. Focused on software development, database systems, and web technologies.",
    highlights: ["Cum Laude", "Dean's Lister", "BSIT"],
  },
  {
    role: "TVL-ICT Track",
    company: "Valencia National High School",
    period: "Jun 2016 - Apr 2018",
    type: "education",
    description: "Specialized in Information Communication Technology. First exposure to programming and web development fundamentals.",
    highlights: ["HTML", "CSS", "Programming Basics"],
  },
  {
    role: "Hello, World!",
    company: "First Line of Code",
    period: "2015",
    type: "milestone",
    description: "Wrote my first program and discovered my passion for coding. The beginning of an exciting journey into software development.",
    highlights: ["Curiosity", "First Steps", "Dream Begins"],
  },
];
