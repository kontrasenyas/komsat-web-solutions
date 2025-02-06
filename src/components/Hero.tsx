import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Empowering Businesses with Cutting-Edge IT Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Transform your business with innovative technology solutions tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Discover Our Services</Button>
            <Button size="lg" variant="outline">Schedule a Call</Button>
          </div>
        </div>
      </div>
    </section>
  );
};