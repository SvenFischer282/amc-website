import { Button } from "@/components/ui/button";
import { MapPin, Clock, Instagram, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coffee.jpg";

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
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Vitajte v{" "}
              <span className="font-script text-primary bg-white/10 px-4 py-2 rounded-lg">
                AMC
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Prvá specialty coffeeshop v Spišskej Novej Vsi. Miesto, kde sa káva stretáva s priateľstvom 
              a každé ráno začína s úsmevom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/menu">
                <Button variant="hero" size="xl" className="group">
                  Preskúmajte menu
                  <Coffee className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Button variant="warm" size="xl">
                  Naša káva
                </Button>
              </button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Ing. Straku 9003</p>
                  <p className="text-sm opacity-80">Spišská Nová Ves</p>
                </div>
              </div>
              
              <button 
                onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Pon-Pia 6:00-22:00</p>
                  <p className="text-sm opacity-80">So-Ne 8:00-22:00</p>
                </div>
              </button>
              
              <a 
                href="https://instagram.com/amctvojcoffeeshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
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