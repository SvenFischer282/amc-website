import { Instagram, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section className="py-12 md:py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Kontaktujte nás
              </h2>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                Máte otázky, pripomienky alebo chcete rezervovať miesto? Napíšte
                nám alebo nás navštívte osobne!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 md:space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Phone className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base md:text-lg">
                        Telefón
                      </h3>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="opacity-90 hover:text-primary transition-colors break-all"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Mail className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base md:text-lg">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="opacity-90 hover:text-primary transition-colors break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Instagram className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base md:text-lg">
                        Instagram
                      </h3>
                      <a
                        href={siteConfig.contact.social.instagram.breakkyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-90 hover:text-primary transition-colors block break-all"
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
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-base md:text-lg">
                      Otváracie hodiny
                    </h3>
                    <p className="text-sm opacity-80">
                      Kedy nás môžete navštíviť
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-white/10 gap-2">
                    <div>
                      <span className="font-medium text-sm md:text-base">
                        {siteConfig.openingHours.weekdays.days}
                      </span>
                      <p className="text-xs opacity-70">
                        {siteConfig.openingHours.weekdays.description}
                      </p>
                    </div>
                    <span className="font-bold text-base md:text-lg text-primary">
                      {siteConfig.openingHours.weekdays.hours}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-white/10 gap-2">
                    <div>
                      <span className="font-medium text-sm md:text-base">
                        {siteConfig.openingHours.saturday.days}
                      </span>
                      <p className="text-xs opacity-70">
                        {siteConfig.openingHours.saturday.description}
                      </p>
                    </div>
                    <span className="font-bold text-base md:text-lg text-primary">
                      {siteConfig.openingHours.saturday.hours}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-2">
                    <div>
                      <span className="font-medium text-sm md:text-base">
                        {siteConfig.openingHours.sunday.days}
                      </span>
                      <p className="text-xs opacity-70">
                        {siteConfig.openingHours.sunday.description}
                      </p>
                    </div>
                    <span className="font-bold text-base md:text-lg text-primary">
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
