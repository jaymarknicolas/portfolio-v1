import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { CertificationCard } from "@/components/CertificationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
  return (
    <PageLayout
      title="Certifications"
      description="Professional certifications including Google UX Design, META Front-End Developer, and more. Credentials that validate my expertise in software development and design."
      canonicalPath="/certifications"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Certifications" subtitle="My Credentials" />

        <div className="mt-8 max-w-2xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CertificationCard certification={cert} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  );
}
