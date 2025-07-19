import { Coffee, Instagram, MapPin, Phone, Menu as MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (!isHomePage) {
      window.location.href = '/#contact';
    } else {
      const element = document.querySelector('#contact') || document.querySelector('footer');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-coffee-dark rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AMC</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-coffee-dark">AMC Tvoj Coffeeshop</h1>
              <p className="text-sm text-muted-foreground">& Breakky</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-coffee-medium hover:text-primary transition-colors cursor-pointer"
            >
              O nás
            </button>
            <Link 
              to="/menu" 
              className="text-coffee-medium hover:text-primary transition-colors"
            >
              Menu
            </Link>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-coffee-medium hover:text-primary transition-colors cursor-pointer"
            >
              Galéria
            </button>
            <button 
              onClick={() => scrollToSection('visit')}
              className="text-coffee-medium hover:text-primary transition-colors cursor-pointer"
            >
              Navštívte nás
            </button>
            <Button variant="coffee" size="sm" onClick={handleContactClick}>
              Kontakt
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}