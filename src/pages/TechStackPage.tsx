import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { TechStack } from "@/components/TechStack";
import { SectionHeading } from "@/components/SectionHeading";

export default function TechStackPage() {
  return (
    <PageLayout
      title="Tech Stack"
      description="Technologies I work with: React, Next.js, TypeScript, Laravel, Node.js, PostgreSQL, MySQL, Prisma, and more. Full-stack development expertise across frontend, backend, and databases."
      canonicalPath="/tech-stack"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Tech Stack" subtitle="Technologies I Work With" />

        <div className="mt-8 max-w-4xl">
          <TechStack />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-card p-6 rounded-xl border-gradient">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF4D00] rounded-full" />
              Frontend Development
            </h3>
            <p className="text-muted-foreground text-sm">
              Building responsive, performant user interfaces with React, Next.js, and TypeScript.
              Expertise in state management, component architecture, and modern CSS frameworks like Tailwind.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border-gradient">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF4D00] rounded-full" />
              Backend Development
            </h3>
            <p className="text-muted-foreground text-sm">
              Creating robust APIs and server-side applications with Node.js, Laravel, and Python.
              Experience with RESTful services, GraphQL, and microservices architecture.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border-gradient">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF4D00] rounded-full" />
              Database & ORM
            </h3>
            <p className="text-muted-foreground text-sm">
              Designing efficient database schemas with PostgreSQL and MySQL.
              Leveraging Prisma and other ORMs for type-safe database operations.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border-gradient">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF4D00] rounded-full" />
              Tools & Platforms
            </h3>
            <p className="text-muted-foreground text-sm">
              Working with WordPress, Shopify, and other CMS platforms.
              Building desktop apps with Electron and mobile apps with React Native and Ionic.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}
