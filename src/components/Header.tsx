import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">TechSolutions</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
            <Button>Get a Free Consultation</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
            <Button className="w-full">Get a Free Consultation</Button>
          </nav>
        )}
      </div>
    </header>
  );
};