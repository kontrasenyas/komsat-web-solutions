
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Komsat Solutions</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="relative text-secondary hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100">Home</a>
            <a href="#about" className="relative text-secondary hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100">About</a>
            <a href="#services" className="relative text-secondary hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100">Services</a>
            <a href="#projects" className="relative text-secondary hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100">Projects</a>
            <Button onClick={() => window.location.hash = 'contact'}>Get a Free Consultation</Button>
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
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="text-secondary hover:text-primary transition-colors">Services</a>
            <Button onClick={() => window.location.hash = 'contact'} className="w-full">Get a Free Consultation!</Button>
          </nav>
        )}
      </div>
    </header>
  );
};
