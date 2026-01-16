export interface Project {
  name: string;
  description: string;
  url?: string;
  techStack?: string[];
  desktopImage?: string;
  mobileImage?: string;
}

export const projects: Project[] = [
  {
    name: "Qorvex",
    description:
      "Customizable productivity dashboard with draggable widgets—to-do lists, Pomodoro timer, embeddable pages. Built with Next.js, NextAuth, and Prisma.",
    url: "https://qorvexflow.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "NextAuth", "Prisma"],
    desktopImage: "projects/qorvex-desktop.png",
    mobileImage: "projects/qorvex-mobile.png",
  },
  {
    name: "Happy Feet & Apparel",
    description:
      "Inventory & POS System for retail with real-time tracking, automated stock updates, barcode scanning, and sales reports using Next.js, Prisma, and PostgreSQL.",
    // url: "https://project01-zeta-puce.vercel.app/",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "ShadCN", "Chart.js"],
    desktopImage: "projects/happy-feet-desktop.png",
    mobileImage: "projects/happy-feet-mobile.png",
  },
  {
    name: "Valencia City PESO System",
    description:
      "Job posting and applicant tracking system with RESTful APIs, role management, and analytics. Accessible interface designed in Figma.",
    // url: "https://peso-emis-app.jaymarknicolas.com/",
    techStack: ["React", "Laravel", "MySQL", "Figma", "REST API"],
    desktopImage: "projects/peso-desktop.png",
    mobileImage: "projects/peso-mobile.png",
  },
  {
    name: "X&C Construction Monitoring",
    description:
      "Real-time construction project tracking with data visualization and reporting dashboards. Built with Laravel MVC architecture for scalability.",
    // url: "https://construction-monitoring.jaymarknicolas.com/",
    techStack: ["Laravel", "MySQL", "JavaScript", "jQuery", "DataTables"],
    desktopImage: "projects/x-c-desktop.png",
    mobileImage: "projects/x-c-mobile.png",
  },
];
