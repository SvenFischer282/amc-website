import { MapPin, Clock, Phone, Mail, Navigation, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Visit() {
  const openingHours = [
    {
      day: siteConfig.openingHours.weekdays.days,
      time: siteConfig.openingHours.weekdays.hours,
    },
    {
      day: siteConfig.openingHours.saturday.days,
      time: siteConfig.openingHours.saturday.hours,
    },
    {
      day: siteConfig.openingHours.sunday.days,
      time: siteConfig.openingHours.sunday.hours,
    },
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
            Nachádzame sa v srdci Spišskej Novej Vsi. Príďte si vychutnať skvelú
            kávu v príjemnej atmosfére.
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
                  {siteConfig.contact.address.street}
                </p>
                <p className="text-coffee-medium mb-4">
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.country}
                </p>
                <a
                  href={siteConfig.contact.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="coffee" size="sm" className="group">
                    Navigovať
                    <Navigation className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
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
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-coffee-light/20 last:border-b-0"
                    >
                      <span className="text-coffee-medium font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-coffee-dark font-semibold">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-coffee-medium">
                    <strong>Poznámka:</strong> Otváracie hodiny sa môžu meniť
                    počas sviatkov. Sledujte naš Instagram pre aktuálne
                    informácie.
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
                  <span className="text-coffee-dark">
                    {siteConfig.contact.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-coffee-medium" />
                  <span className="text-coffee-dark">
                    {siteConfig.contact.email}
                  </span>
                </div>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  <Button variant="warm" size="sm" className="w-full">
                    Napísať email
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <div className="bg-gradient-hero rounded-2xl h-96 flex items-center justify-center text-white relative overflow-hidden p-0">
              <iframe
                title="Mapa lokácie"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  siteConfig.contact.address.street +
                    ", " +
                    siteConfig.contact.address.city
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "1rem",
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-2xl"
              ></iframe>
              <div className="absolute inset-0 bg-coffee-dark/20 pointer-events-none rounded-2xl"></div>
              <div className="relative z-10 text-center pointer-events-none">
                {/* <h3 className="text-2xl font-bold mb-2">Mapa lokácie</h3>
                <p className="opacity-90 mb-4">
                  {siteConfig.contact.address.street},{" "}
                  {siteConfig.contact.address.city}
                </p> */}
              </div>
            </div>

            {/* Parking Info */}
            <Card className="shadow-warm border-0 bg-gradient-warm">
              <CardContent className="p-6">
                <h3 className="font-bold text-coffee-dark mb-3">Parkovanie</h3>
                <p className="text-coffee-medium text-sm leading-relaxed">
                  K dispozícii sú parkovacie miesta priamo pred kaviarňou. V
                  centre mesta je dostupné aj verejné parkovanie v krátkom pešom
                  dosahu.
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
                  Pre najlepší zážitok odporúčame návštevu ráno na čerstvé
                  raňajky alebo popoludní na specialty kávy. Víkendy bývajú
                  rušnejšie!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
