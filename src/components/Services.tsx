
import { useState } from "react";
import { Code, Database, Server, Shield, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to streamline your business operations",
    icon: Code,
  },
  {
    title: "Cloud Computing Solutions",
    description: "Secure and scalable cloud infrastructure for your growing needs",
    icon: Database,
  },
  {
    title: "Cybersecurity & Data Protection",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: Shield,
  },
  {
    title: "IT Consulting & Support",
    description: "Expert guidance and support for your technology initiatives",
    icon: Users,
  },
  {
    title: "Web & Mobile Development",
    description: "Creating powerful web and mobile applications",
    icon: Server,
  },
];

export const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useIntersectionObserver(() => setIsVisible(true));
  
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          data-fade 
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const [isCardVisible, setIsCardVisible] = useState(false);
            const cardRef = useIntersectionObserver(() => setIsCardVisible(true));

            return (
              <div 
                key={service.title} 
                ref={cardRef}
                data-fade
                className={`bg-white p-6 rounded-lg service-card ${isCardVisible ? 'animate-fade-in' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: isCardVisible ? undefined : 0
                }}
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
