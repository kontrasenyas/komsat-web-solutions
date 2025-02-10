import { useState } from "react";
import { Brain, Code, Database, Server, Shield, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ServiceDetailsModal } from "./ServiceDetailsModal";

const services = [
  { title: "AI Solutions", description: "Cutting-edge artificial intelligence integration.", icon: Brain },
  { title: "Custom Software Development", description: "Tailored software solutions.", icon: Code },
  { title: "Cloud Computing Solutions", description: "Secure and scalable infrastructure.", icon: Database },
  { title: "Cybersecurity & Data Protection", description: "Comprehensive security solutions.", icon: Shield },
  { title: "IT Consulting & Support", description: "Expert guidance for your tech needs.", icon: Users },
  { title: "Web Development", description: "Building powerful applications.", icon: Server },
];

export const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  // Monitor header visibility
  const headerRef = useIntersectionObserver<HTMLDivElement>(() => {
    setIsVisible(true);
  });

  // Monitor cards visibility
  const cardsContainerRef = useIntersectionObserver<HTMLDivElement>(() => {
    setIsCardsVisible(true);
  }, { threshold: 0.2 });

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive IT solutions to help your business thrive.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.title}
                className={`bg-white p-6 rounded-lg service-card shadow-md transition-all duration-700 ease-out transform ${isCardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <IconComponent className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedService(service)}
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <ServiceDetailsModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </section>
  );
};

export { services };
