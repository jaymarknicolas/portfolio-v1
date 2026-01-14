export interface Project {
  name: string;
  description: string;
  url: string;
  techStack?: string[];
  desktopImage?: string;
  mobileImage?: string;
}

export const projects: Project[] = [
  {
    name: "Happy Feet & Apparel",
    description:
      "Inventory & POS System for retail with real-time tracking, automated stock updates, barcode scanning, and sales reports using Next.js, Prisma, and PostgreSQL.",
    url: "https://project01-zeta-puce.vercel.app/",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "ShadCN", "Chart.js"],
    desktopImage: undefined,
    mobileImage: undefined,
  },
  {
    name: "WidgetFlow",
    description:
      "Customizable productivity dashboard with draggable widgets—to-do lists, Pomodoro timer, embeddable pages. Built with Next.js, NextAuth, and Prisma.",
    url: "https://widgetflow.jaymarknicolas.com/",
    techStack: ["Next.js", "React", "TypeScript", "NextAuth", "Prisma"],
    desktopImage: undefined,
    mobileImage: undefined,
  },
  {
    name: "Valencia City PESO System",
    description:
      "Job posting and applicant tracking system with RESTful APIs, role management, and analytics. Accessible interface designed in Figma.",
    url: "https://peso-emis-app.jaymarknicolas.com/",
    techStack: ["React", "Laravel", "MySQL", "Figma", "REST API"],
    desktopImage: undefined,
    mobileImage: undefined,
  },
  {
    name: "X&C Construction Monitoring",
    description:
      "Real-time construction project tracking with data visualization and reporting dashboards. Built with Laravel MVC architecture for scalability.",
    url: "https://construction-monitoring.jaymarknicolas.com/",
    techStack: ["Laravel", "MySQL", "JavaScript", "jQuery", "DataTables"],
    desktopImage: undefined,
    mobileImage: undefined,
  },
];
