import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import { CertificationCard } from "../CertificationCard";

const CertificationsDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          variant="ghost"
          className="text-[#FF4D00] hover:text-[#FF4D00]/80 hover:bg-[#FF4D00]/10 transition-all duration-300 group"
        >
          View All{" "}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background">
        <div className="my-8 w-[95%] mx-auto max-h-[70vh] overflow-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            All Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CertificationCard certification={cert} />
              </motion.div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CertificationsDrawer;
