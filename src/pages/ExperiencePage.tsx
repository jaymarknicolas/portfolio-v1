import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/experiences";

export default function ExperiencePage() {
  return (
    <PageLayout
      title="Experience"
      description="My professional journey as a software engineer. Currently at Scaleforge as Intermediate Frontend Engineer. Previously at Syntactics Inc. Graduated Cum Laude from Central Mindanao University."
      canonicalPath="/experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Experience" subtitle="My Professional Journey" />

        <div className="mt-8 max-w-3xl mx-auto">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </motion.div>
    </PageLayout>
  );
}
