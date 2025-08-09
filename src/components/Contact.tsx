
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const { toast } = useToast();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const headerRef = useIntersectionObserver<HTMLDivElement>(() => setIsHeaderVisible(true));
  const formRef = useIntersectionObserver<HTMLFormElement>(() => setIsFormVisible(true));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{ name, email, message }]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Ready to transform your business? Let's talk about your project..
            </p>
          </div>

          <form 
            ref={formRef}
            data-fade 
            onSubmit={handleSubmit} 
            className={`space-y-6 ${isFormVisible ? 'animate-fade-in' : ''}`}
          >
            <div>
              <Input name="name" placeholder="Your Name" required />
            </div>
            <div>
              <Input name="email" type="email" placeholder="Email Address" required />
            </div>
            <div>
              <Textarea name="message" placeholder="Your Message" className="min-h-[150px]" required />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
