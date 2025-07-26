import { Coffee, Instagram, MapPin, Clock, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import logoAMC from "@/assets/logo-amc-breakky.jpg";

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoAMC}
                alt="AMC Breakky Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-white"
              />
              <div>
                <h3 className="font-bold text-lg md:text-xl">AMC Breakky</h3>
                <p className="text-coffee-light text-sm md:text-base">
                  Raňajky & Brunch
                </p>
              </div>
            </div>
            <p className="text-coffee-light leading-relaxed mb-4 max-w-md text-sm md:text-base">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-coffee-light">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-xs md:text-sm">
                {siteConfig.footer.madeWith}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-white">
              Rýchle odkazy
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-coffee-light hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-white">
              Právne informácie
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-coffee-light hover:text-primary transition-colors text-sm md:text-base"
                >
                  Ochrana údajov
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-coffee-light hover:text-primary transition-colors text-sm md:text-base"
                >
                  Podmienky používania
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-coffee-light hover:text-primary transition-colors text-sm md:text-base"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-white">
              Kontakt
            </h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href={siteConfig.contact.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-primary transition-colors group"
              >
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-coffee-light text-sm group-hover:text-primary transition-colors">
                  <p>{siteConfig.contact.address.street}</p>
                  <p>{siteConfig.contact.address.city}</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-coffee-light text-sm">
                  <p>Pon-Pia: {siteConfig.openingHours.weekdays.hours}</p>
                  <p>
                    So-Ne: {siteConfig.openingHours.saturday.hours}/
                    {siteConfig.openingHours.sunday.hours.split(" - ")[1]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-coffee-light text-sm">
                  <p>{siteConfig.contact.social.instagram.breakky}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-medium mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-coffee-light text-xs md:text-sm text-center sm:text-left">
              {siteConfig.footer.copyright}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.contact.social.instagram.breakkyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-coffee-light mt-4 opacity-70">
        Created by Sven Fischer
      </div>
    </footer>
  );
}
