
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Contact = () => {
  const { toast } = useToast();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const headerRef = useIntersectionObserver(() => setIsHeaderVisible(true));
  const formRef = useIntersectionObserver(() => setIsFormVisible(true));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div 
            ref={headerRef}
            data-fade 
            className={`text-center mb-12 ${isHeaderVisible ? 'animate-fade-in' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">
              Ready to transform your business? Let's talk about your project
            </p>
          </div>

          <form 
            ref={formRef}
            data-fade 
            onSubmit={handleSubmit} 
            className={`space-y-6 ${isFormVisible ? 'animate-fade-in' : ''}`}
          >
            <div>
              <Input placeholder="Your Name" required />
            </div>
            <div>
              <Input type="email" placeholder="Email Address" required />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="min-h-[150px]" required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
