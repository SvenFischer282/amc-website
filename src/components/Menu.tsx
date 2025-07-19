import { Coffee, UtensilsCrossed, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Menu() {
  const menuCategories = [
    {
      icon: Coffee,
      title: "Káva & Nápoje",
      description: "Specialty kávy pripravené s láskou",
      items: [
        "Espresso, Americano, Cappuccino",
        "Latte art špeciality", 
        "Cold brew & iced kávy",
        "Čaje a horúce čokolády",
        "Čerstvé džúsy a smoothies"
      ]
    },
    {
      icon: UtensilsCrossed,
      title: "Raňajky & Jedlá",
      description: "Čerstvo pripravené na objednávku",
      items: [
        "Klasické a specialty breakky",
        "Avokádové tosty", 
        "Pancakes a wafle",
        "Zdravé bowl misky",
        "Sendviče a wrapy"
      ]
    },
    {
      icon: Cake,
      title: "Pečivo & Dezerty",
      description: "Domáce sladkosti a pečivo",
      items: [
        "Čerstvé croissanty a muffiny",
        "Domáce koláče a torty", 
        "Cheesecakes a brownie",
        "Sezónne špeciality",
        "Bezlepkové možnosti"
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Naše menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Každé jedlo pripravujeme čerstvo na objednávku s najkvalitnejšími surovinami 
            a s láskou k detailu
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <Card key={index} className="shadow-warm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-warm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-coffee-dark">{category.title}</CardTitle>
                <CardDescription className="text-coffee-medium">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-coffee-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Osobné prispôsobenie
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Máte špeciálne požiadavky? Radi prispôsobíme akékoľvek jedlo alebo nápoj 
            presne podľa vašich predstáv a chuti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="hero" size="lg" className="bg-white text-coffee-dark hover:bg-cream">
                Kompletné menu
              </Button>
            </Link>
            <a href="tel:+421xxxxxxxxx">
              <Button variant="warm" size="lg">
                Objednať online
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}