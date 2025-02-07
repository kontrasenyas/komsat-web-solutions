
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative"
      style={{
        backgroundImage: "url('/lovable-uploads/357f6c75-7ef4-42f8-91f3-15908cab70c3.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div data-fade className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Empowering Businesses with Cutting-Edge IT Solutions
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Peeking into the Future of IT
          </p>
          <p className="text-lg md:text-xl text-white mb-8">
            Transform your business with innovative technology solutions tailored to your needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Discover Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
