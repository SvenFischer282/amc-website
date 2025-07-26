import { Button } from "@/components/ui/button";
import { MapPin, Clock, Instagram, Coffee, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coffee.jpg";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 via-coffee-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-5 md:mb-6 leading-tight drop-shadow-lg text-center sm:text-left">
              <span className="block mb-2 tracking-wide">Vitajte v</span>
              <span className="font-script text-primary bg-white/20 px-5 py-2 md:px-6 md:py-3 rounded-2xl text-4xl sm:text-5xl md:text-7xl shadow-lg inline-block border-2 border-primary/30">
                AMC Breakky
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed text-center sm:text-left">
              Raňajkáreň a brunch v Spišskej Novej Vsi. Miesto, kde každý deň
              začína s chutnými raňajkami, brunchom a úsmevom.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <Link to="/menu">
                <Button
                  variant="hero"
                  size="xl"
                  className="group w-full sm:w-auto"
                >
                  Preskúmajte menu
                  <Coffee className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Button variant="warm" size="xl" className="w-full sm:w-auto">
                  Náš príbeh
                </Button>
              </button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-white">
              <a
                href={siteConfig.contact.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:bg-white/20 transition-colors group"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">
                    {siteConfig.contact.address.street}
                  </p>
                  <p className="text-sm opacity-80">
                    {siteConfig.contact.address.city}
                  </p>
                </div>
                <Navigation className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("visit")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">
                    Pon-Pia
                    {" " + siteConfig.openingHours.weekdays.hours}
                  </p>
                  <p className="text-sm opacity-80">
                    So-Ne
                    {" " + siteConfig.openingHours.saturday.hours}
                  </p>
                </div>
              </button>

              <a
                href="https://instagram.com/amctvojcoffeeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">@amctvojcoffeeshop</p>
                  <p className="text-sm opacity-80">Sledujte nás</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
