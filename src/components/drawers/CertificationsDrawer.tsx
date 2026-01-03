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
          className="text-[#FF4D00] hover:text-[#FF4D00]/80"
        >
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white dark:bg-black">
        <div className="my-12 space-y-4 w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[50vh] overflow-auto ">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="!m-0 "
            >
              <CertificationCard certification={cert} />
            </motion.div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CertificationsDrawer;
