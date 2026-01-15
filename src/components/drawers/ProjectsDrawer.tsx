import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FolderOpen } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const ProjectsDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
        >
          <FolderOpen className="mr-2 h-4 w-4 group-hover:text-[#FF4D00] transition-colors" />
          See More Projects
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background">
        <div className="my-8 w-[95%] mx-auto max-h-[70vh] overflow-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectsDrawer;
