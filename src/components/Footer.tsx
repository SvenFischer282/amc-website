import { Coffee, Instagram, MapPin, Clock, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import logoAMC from "@/assets/logo-amc-breakky.jpg";

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoAMC}
                alt="AMC Breakky Logo"
                className="w-12 h-12 rounded-full object-cover bg-white"
              />
              <div>
                <h3 className="font-bold text-xl">AMC Breakky</h3>
                <p className="text-coffee-light">Raňajky & Brunch</p>
              </div>
            </div>
            <p className="text-coffee-light leading-relaxed mb-4 max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-coffee-light">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">{siteConfig.footer.madeWith}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Rýchle odkazy</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-coffee-light hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Kontakt</h4>
            <div className="space-y-3">
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
                  <p>{siteConfig.contact.social.instagram.coffeeshop}</p>
                  <p>{siteConfig.contact.social.instagram.breakky}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-medium mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-coffee-light text-sm">
              {siteConfig.footer.copyright}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.contact.social.instagram.coffeeshopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.contact.social.instagram.breakkyUrl}
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
