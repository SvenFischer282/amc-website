import {
  Coffee,
  Instagram,
  MapPin,
  Phone,
  Menu as MenuIcon,
  X,
  Clock,
  Heart,
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
import logoAMC from "@/assets/logo-amc-breakky.jpg";

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Enhanced smooth scroll with animation for 'visit' section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay for visual feedback
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
        // Optionally, you could add a highlight effect here
      }
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = "#visit";
    } else {
      const element = document.getElementById("visit");
      if (element) {
        // Add a small delay for visual feedback
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    }
  };

  const handleMenuLink = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="relative">
              <img
                src={logoAMC}
                alt="AMC Breakky Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-white shadow-sm group-hover:shadow-md transition-shadow"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-2 h-2 md:w-2.5 md:h-2.5 text-white fill-current" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg md:text-xl text-coffee-dark">
                AMC Breakky
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Raňajky & Brunch
              </p>
            </div>
            <div className="sm:hidden">
              <div>
                <h1 className="font-bold text-lg text-coffee-dark">AMC</h1>
                <p className="text-xs text-muted-foreground">Breakky</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-coffee-medium hover:text-primary transition-colors cursor-pointer font-medium"
            >
              O nás
            </button>
            <Link
              to="/menu"
              className="text-coffee-medium hover:text-primary transition-colors font-medium"
            >
              Menu
            </Link>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-coffee-medium hover:text-primary transition-colors cursor-pointer font-medium"
            >
              Galéria
            </button>
            <button
              onClick={() => scrollToSection("visit")}
              className="text-coffee-medium hover:text-primary transition-colors cursor-pointer font-medium"
            >
              Navštívte nás
            </button>
            <Button
              variant="coffee"
              size="sm"
              onClick={handleContactClick}
              className="font-semibold"
            >
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative group"
                aria-label="Otvoriť menu"
              >
                <div className="flex flex-col gap-1 w-6 h-6 justify-center items-center">
                  <div className="w-5 h-0.5 bg-coffee-dark group-hover:bg-primary transition-colors"></div>
                  <div className="w-5 h-0.5 bg-coffee-dark group-hover:bg-primary transition-colors"></div>
                  <div className="w-5 h-0.5 bg-coffee-dark group-hover:bg-primary transition-colors"></div>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[90vw] max-w-[400px] bg-gradient-to-br from-white to-orange-50/30"
            >
              <SheetHeader className="text-left pb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={logoAMC}
                    alt="AMC Breakky Logo"
                    className="w-10 h-10 rounded-full object-cover bg-white shadow-sm"
                  />
                  <div>
                    <SheetTitle className="text-coffee-dark text-xl font-bold">
                      AMC Breakky
                    </SheetTitle>
                    <p className="text-sm text-muted-foreground">
                      Raňajky & Brunch
                    </p>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex flex-col space-y-2">
                {/* Mobile Navigation Links */}
                <div className="space-y-0">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="w-full text-left text-coffee-dark hover:text-primary transition-colors cursor-pointer text-lg py-4 px-4 rounded-xl hover:bg-white/80 active:bg-white border border-transparent hover:border-orange-200 font-medium block"
                  >
                    O nás
                  </button>

                  <Link
                    to="/menu"
                    onClick={handleMenuLink}
                    className="w-full text-left text-coffee-dark hover:text-primary transition-colors text-lg py-4 px-4 rounded-xl hover:bg-white/80 active:bg-white border border-transparent hover:border-orange-200 font-medium block"
                  >
                    Menu
                  </Link>

                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="w-full text-left text-coffee-dark hover:text-primary transition-colors cursor-pointer text-lg py-4 px-4 rounded-xl hover:bg-white/80 active:bg-white border border-transparent hover:border-orange-200 font-medium block"
                  >
                    Galéria
                  </button>

                  <button
                    onClick={() => scrollToSection("visit")}
                    className="w-full text-left text-coffee-dark hover:text-primary transition-colors cursor-pointer text-lg py-4 px-4 rounded-xl hover:bg-white/80 active:bg-white border border-transparent hover:border-orange-200 font-medium block"
                  >
                    Navštívte nás
                  </button>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-3 pt-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 transition-colors border border-orange-200/50"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">
                        Zavolajte nám
                      </p>
                      <p className="text-sm text-coffee-medium">
                        {siteConfig.contact.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.contact.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 transition-colors border border-orange-200/50"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Adresa</p>
                      <p className="text-sm text-coffee-medium">
                        {siteConfig.contact.address.street}
                      </p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.contact.social.instagram.breakkyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 transition-colors border border-orange-200/50"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Instagram</p>
                      <p className="text-sm text-coffee-medium">
                        {siteConfig.contact.social.instagram.breakky}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
