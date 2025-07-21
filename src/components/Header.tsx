import {
  Coffee,
  Instagram,
  MapPin,
  Phone,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = "#contact";
    } else {
      const element =
        document.querySelector("#contact") || document.querySelector("footer");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuLink = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 bg-coffee-dark rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AMC</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-coffee-dark">
                AMC Tvoj Coffeeshop
              </h1>
              <p className="text-sm text-muted-foreground">& Breakky</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
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
              onClick={() => scrollToSection("gallery")}
              className="text-coffee-medium hover:text-primary transition-colors cursor-pointer"
            >
              Galéria
            </button>
            <button
              onClick={() => scrollToSection("visit")}
              className="text-coffee-medium hover:text-primary transition-colors cursor-pointer"
            >
              Navštívte nás
            </button>
            <Button variant="coffee" size="sm" onClick={handleContactClick}>
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="text-coffee-dark text-xl font-bold">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-coffee-medium hover:text-primary transition-colors cursor-pointer text-lg py-2 border-b border-gray-100"
                  >
                    O nás
                  </button>

                  <Link
                    to="/menu"
                    onClick={handleMenuLink}
                    className="text-left text-coffee-medium hover:text-primary transition-colors text-lg py-2 border-b border-gray-100"
                  >
                    Menu
                  </Link>

                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="text-left text-coffee-medium hover:text-primary transition-colors cursor-pointer text-lg py-2 border-b border-gray-100"
                  >
                    Galéria
                  </button>

                  <button
                    onClick={() => scrollToSection("visit")}
                    className="text-left text-coffee-medium hover:text-primary transition-colors cursor-pointer text-lg py-2 border-b border-gray-100"
                  >
                    Navštívte nás
                  </button>
                </div>

                {/* Contact Button */}
                <div className="pt-4">
                  <Button
                    variant="coffee"
                    size="lg"
                    onClick={handleContactClick}
                    className="w-full"
                  >
                    Kontakt
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-coffee-medium">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-coffee-medium">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">
                        {siteConfig.contact.address.street}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-coffee-medium">
                      <Instagram className="h-4 w-4" />
                      <span className="text-sm">
                        {siteConfig.contact.social.instagram.coffeeshop}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
