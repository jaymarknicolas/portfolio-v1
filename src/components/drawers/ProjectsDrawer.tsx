import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import { CertificationCard } from "../CertificationCard";
import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ProjectsDrawer = () => {
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
      <DrawerContent className="bg-black">
        <div className="my-12 space-y-4 w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[50vh] overflow-auto ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="!m-0 "
            >
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#1A1A1A]/80 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mt-1 text-base">
                    {project.description}
                  </p>
                  <a
                    className="flex items-center text-[#FF4D00] mt-4 text-sm"
                    href={project.url}
                    target="_blank"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {project.url}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectsDrawer;
