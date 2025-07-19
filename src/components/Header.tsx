import { Coffee, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-coffee-dark rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AMC</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-coffee-dark">AMC Tvoj Coffeeshop</h1>
              <p className="text-sm text-muted-foreground">& Breakky</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-coffee-medium hover:text-primary transition-colors">
              O nás
            </a>
            <a href="#menu" className="text-coffee-medium hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-coffee-medium hover:text-primary transition-colors">
              Galéria
            </a>
            <a href="#visit" className="text-coffee-medium hover:text-primary transition-colors">
              Navštívte nás
            </a>
            <Button variant="coffee" size="sm">
              Kontakt
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Coffee className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}