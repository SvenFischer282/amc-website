import { Coffee, Instagram, MapPin, Clock, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AMC</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">AMC Tvoj Coffeeshop</h3>
                <p className="text-coffee-light">& Breakky</p>
              </div>
            </div>
            <p className="text-coffee-light leading-relaxed mb-4 max-w-md">
              Prvá specialty coffeeshop v Spišskej Novej Vsi. Miesto, kde sa káva 
              stretáva s priateľstvom a každé ráno začína s úsmevom.
            </p>
            <div className="flex items-center gap-2 text-coffee-light">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">Vytvorené s láskou pre našu komunitu</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Rýchle odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-coffee-light hover:text-primary transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#menu" className="text-coffee-light hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-coffee-light hover:text-primary transition-colors">
                  Galéria
                </a>
              </li>
              <li>
                <a href="#visit" className="text-coffee-light hover:text-primary transition-colors">
                  Navštívte nás
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-coffee-light text-sm">
                  <p>Ing. Straku 9003</p>
                  <p>052 01 Spišská Nová Ves</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-coffee-light text-sm">
                  <p>Pon-Pia: 6:00-22:00</p>
                  <p>So-Ne: 8:00-22:00/19:00</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-coffee-light text-sm">
                  <p>@amctvojcoffeeshop</p>
                  <p>@amcbreakky</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-medium mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-coffee-light text-sm">
              © 2024 AMC Tvoj Coffeeshop & Breakky. Všetky práva vyhradené.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/amctvojcoffeeshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/amcbreakky" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}