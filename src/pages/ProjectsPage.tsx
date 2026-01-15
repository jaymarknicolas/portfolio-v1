import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      description="Explore my portfolio of software projects including Qorvex productivity dashboard, Valencia City PESO System, X&C Construction Monitoring, and more. Built with React, Next.js, Laravel, and TypeScript."
      canonicalPath="/all-projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="All Projects" subtitle="My Work Portfolio" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </PageLayout>
  );
}
