
import { useState } from "react";
import { Brain, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ProjectDetailsModal } from "./ProjectDetailsModal";

const projects = [
  {
    title: "AI Chatbot",
    description: "An intelligent conversational AI assistant powered by machine learning.",
    icon: Brain,
    tags: ["AI", "NLP", "Python"],
    details: {
      overview: "A sophisticated chatbot that leverages natural language processing to provide intelligent responses and assist users with various tasks.",
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Integration with external APIs",
        "Customizable personality"
      ],
      technologies: ["Python", "TensorFlow", "NLTK", "FastAPI", "Docker"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/ai-chatbot"
    }
  },
  {
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with seamless user experience.",
    icon: Globe,
    tags: ["React", "Node.js", "MongoDB"],
    details: {
      overview: "A full-featured e-commerce platform built with modern technologies, offering a smooth shopping experience.",
      features: [
        "Product catalog with search and filters",
        "Shopping cart and wishlist",
        "Secure payment integration",
        "Order tracking",
        "Admin dashboard"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      demoUrl: "https://shop.example.com",
      githubUrl: "https://github.com/example/ecommerce"
    }
  },
  {
    title: "Corporate Website",
    description: "A professional business website with dynamic content management.",
    icon: Globe,
    tags: ["Next.js", "TypeScript", "Tailwind"],
    details: {
      overview: "A modern corporate website featuring dynamic content management and responsive design.",
      features: [
        "Dynamic content management",
        "Blog system",
        "Contact forms",
        "Newsletter integration",
        "Analytics dashboard"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      demoUrl: "https://corporate.example.com",
      githubUrl: "https://github.com/example/corporate-site"
    }
  }
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const headerRef = useIntersectionObserver<HTMLDivElement>(() => {
    setIsVisible(true);
  });

  const cardsContainerRef = useIntersectionObserver<HTMLDivElement>(() => {
    setIsCardsVisible(true);
  }, { threshold: 0.2 });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions and successful implementations.
          </p>
        </div>

        {/* Project Cards */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;

            return (
              <Card
                key={project.title}
                className={`transition-all duration-700 ease-out transform ${
                  isCardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <IconComponent className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};
