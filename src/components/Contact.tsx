import { Instagram, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Kontaktujte nás
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                Máte otázky, pripomienky alebo chcete rezervovať miesto? 
                Napíšte nám alebo nás navštívte osobne!
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
                      <p className="opacity-90">+421 xxx xxx xxx</p>
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
                      <p className="opacity-90">info@amccoffeeshop.sk</p>
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
                      <p className="opacity-90">@amctvojcoffeeshop</p>
                      <p className="opacity-90">@amcbreakky</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Opening Hours */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Otváracie hodiny</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Pondelok - Piatok</span>
                    <span className="font-semibold">6:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota</span>
                    <span className="font-semibold">8:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nedeľa</span>
                    <span className="font-semibold">8:00 - 19:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Napíšte nám</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Meno
                  </label>
                  <Input 
                    placeholder="Vaše meno"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="vas@email.sk"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">
                  Predmet
                </label>
                <Input 
                  placeholder="Čo by ste nám radi povedali?"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">
                  Správa
                </label>
                <Textarea 
                  placeholder="Vaša správa..."
                  rows={5}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 resize-none"
                />
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full bg-white text-coffee-dark hover:bg-cream group"
              >
                Odoslať správu
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-white/80 text-center">
                Odpovieme vám do 24 hodín. Pre rýchle otázky nás kontaktujte 
                cez Instagram alebo telefón.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}