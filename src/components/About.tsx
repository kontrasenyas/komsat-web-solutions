
import { Code, Database, Server, Shield, Users } from "lucide-react";
import { Button } from "./ui/button";

export const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <img 
                        src="komsat-logo.png" 
                        alt="Komsat Solutions Logo" 
                        className="w-72 h-auto mx-auto mb-4 shadow-lg rounded-lg" 
                    />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovative IT Solutions</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        At Komsat IT Solutions, we specialize in delivering top-notch IT services tailored to your business needs. Based in Cavite, Philippines, we focus on building stunning websites, providing efficient business solutions, and automating tasks to enhance productivity. Our team of experts is dedicated to helping you thrive in the digital landscape. Partner with us to transform your ideas into reality and achieve your business goals with cutting-edge technology.
                    </p>
                    <p>
                        <Button 
                            variant="outline" 
                            className="mt-4" 
                            onClick={() => window.location.hash = 'contact'}
                        >
                            Get in touch
                        </Button>
                    </p>
                </div>
            </div>
        </section>
    );
};
