import { Instagram, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Kontaktujte nás
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                Máte otázky, pripomienky alebo chcete rezervovať miesto? Napíšte
                nám alebo nás navštívte osobne!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Phone className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold text-lg">Telefón</h3>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="opacity-90 hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="opacity-90 hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Instagram className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold text-lg">Instagram</h3>
                      <a
                        href={siteConfig.contact.social.instagram.breakkyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-90 hover:text-primary transition-colors block"
                      >
                        {siteConfig.contact.social.instagram.breakky}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Opening Hours */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">Otváracie hodiny</h3>
                    <p className="text-sm opacity-80">
                      Kedy nás môžete navštíviť
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <div>
                      <span className="font-medium">
                        {siteConfig.openingHours.weekdays.days}
                      </span>
                      <p className="text-xs opacity-70">
                        {siteConfig.openingHours.weekdays.description}
                      </p>
                    </div>
                    <span className="font-bold text-lg text-primary">
                      {siteConfig.openingHours.weekdays.hours}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <div>
                      <span className="font-medium">
                        {siteConfig.openingHours.saturday.days}
                      </span>
                      <p className="text-xs opacity-70">
                        {siteConfig.openingHours.saturday.description}
                      </p>
                    </div>
                    <span className="font-bold text-lg text-primary">
                      {siteConfig.openingHours.saturday.hours}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <span className="font-medium">
                        {siteConfig.openingHours.sunday.days}
                      </span>
                      <p className="text-xs opacity-70">
                        {siteConfig.openingHours.sunday.description}
                      </p>
                    </div>
                    <span className="font-bold text-lg text-primary">
                      {siteConfig.openingHours.sunday.hours}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
