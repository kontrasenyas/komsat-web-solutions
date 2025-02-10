
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, Github, Link } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    icon: any;
    tags: string[];
    details?: {
      overview?: string;
      features?: string[];
      technologies?: string[];
      demoUrl?: string;
      githubUrl?: string;
    };
  };
}

export const ProjectDetailsModal = ({
  isOpen,
  onClose,
  project,
}: ProjectDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <project.icon className="w-12 h-12 text-primary" />
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </div>
          <DialogDescription className="mt-4">
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            {project.details && (
              <div className="space-y-4">
                {project.details.overview && (
                  <div>
                    <h3 className="font-semibold mb-2">Overview</h3>
                    <p className="text-muted-foreground">{project.details.overview}</p>
                  </div>
                )}
                
                {project.details.features && (
                  <div>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {project.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.details.technologies && (
                  <div>
                    <h3 className="font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.details.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  {project.details.demoUrl && (
                    <Button variant="outline" onClick={() => window.open(project.details.demoUrl, '_blank')}>
                      <Eye className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.details.githubUrl && (
                    <Button variant="outline" onClick={() => window.open(project.details.githubUrl, '_blank')}>
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
