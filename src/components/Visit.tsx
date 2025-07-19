import { MapPin, Clock, Phone, Mail, Navigation, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Visit() {
  const openingHours = [
    { day: "Pondelok - Piatok", time: "6:00 - 22:00" },
    { day: "Sobota", time: "8:00 - 22:00" },
    { day: "Nedeľa", time: "8:00 - 19:00" }
  ];

  return (
    <section id="visit" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Navštívte nás
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nachádzame sa v srdci Spišskej Novej Vsi. Príďte si vychutnať 
            skvelú kávu v príjemnej atmosfére.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-8">
            {/* Address */}
            <Card className="shadow-warm border-0 bg-gradient-warm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-coffee-dark">
                  <MapPin className="h-6 w-6 text-primary" />
                  Adresa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-coffee-dark mb-2">
                  Ing. Straku 9003
                </p>
                <p className="text-coffee-medium mb-4">
                  052 01 Spišská Nová Ves, Slovensko
                </p>
                <Button variant="coffee" size="sm" className="group">
                  Navigovať
                  <Navigation className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="shadow-warm border-0 bg-gradient-warm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-coffee-dark">
                  <Clock className="h-6 w-6 text-primary" />
                  Otváracie hodiny
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-coffee-light/20 last:border-b-0">
                      <span className="text-coffee-medium font-medium">{schedule.day}</span>
                      <span className="text-coffee-dark font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-coffee-medium">
                    <strong>Poznámka:</strong> Otváracie hodiny sa môžu meniť počas sviatkov. 
                    Sledujte naš Instagram pre aktuálne informácie.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-warm border-0 bg-gradient-warm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-coffee-dark">
                  <Phone className="h-6 w-6 text-primary" />
                  Kontakt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-coffee-medium" />
                  <span className="text-coffee-dark">+421 xxx xxx xxx</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-coffee-medium" />
                  <span className="text-coffee-dark">info@amccoffeeshop.sk</span>
                </div>
                <Button variant="warm" size="sm" className="w-full">
                  Napísať email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <div className="bg-gradient-hero rounded-2xl h-96 flex items-center justify-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-coffee-dark/20"></div>
              <div className="relative z-10 text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Mapa lokácie</h3>
                <p className="opacity-90 mb-4">
                  Ing. Straku 9003, Spišská Nová Ves
                </p>
                <Button variant="hero" className="bg-white text-coffee-dark hover:bg-cream">
                  Otvoriť v Google Maps
                </Button>
              </div>
            </div>

            {/* Parking Info */}
            <Card className="shadow-warm border-0 bg-gradient-warm">
              <CardContent className="p-6">
                <h3 className="font-bold text-coffee-dark mb-3">Parkovanie</h3>
                <p className="text-coffee-medium text-sm leading-relaxed">
                  K dispozícii sú parkovacie miesta priamo pred kaviarňou. 
                  V centre mesta je dostupné aj verejné parkovanie v krátkom 
                  pešom dosahu.
                </p>
              </CardContent>
            </Card>

            {/* Special Note */}
            <Card className="shadow-warm border-0 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-coffee-dark mb-3 flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  Tip pre návštevníkov
                </h3>
                <p className="text-coffee-medium text-sm leading-relaxed">
                  Pre najlepší zážitok odporúčame návštevu ráno na čerstvé raňajky 
                  alebo popoludní na specialty kávy. Víkendy bývajú rušnejšie!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}