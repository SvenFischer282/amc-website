import { Instagram, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Správa odoslaná!",
      description: "Ďakujeme za vašu správu. Odpovieme vám do 24 hodín.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
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
                  <a href="tel:+421xxxxxxxxx" className="opacity-90 hover:text-primary transition-colors">
                    +421 xxx xxx xxx
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
                  <a href="mailto:info@amccoffeeshop.sk" className="opacity-90 hover:text-primary transition-colors">
                    info@amccoffeeshop.sk
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
                  <a href="https://instagram.com/amctvojcoffeeshop" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-primary transition-colors block">@amctvojcoffeeshop</a>
                  <a href="https://instagram.com/amcbreakky" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-primary transition-colors block">@amcbreakky</a>
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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">
                      Meno
                    </label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vaše meno"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">
                      Email
                    </label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vas@email.sk"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Predmet
                  </label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Čo by ste nám radi povedali?"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Správa
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Vaša správa..."
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
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
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}