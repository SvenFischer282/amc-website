import { Coffee, UtensilsCrossed, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

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
        "Čerstvé džúsy a smoothies",
      ],
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
        "Sendviče a wrapy",
      ],
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
        "Bezlepkové možnosti",
      ],
    },
  ];

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-dark mb-4 sm:mb-6">
            Naše menu
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Každé jedlo pripravujeme čerstvo na objednávku s najkvalitnejšími
            surovinami a s láskou k detailu
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <Card
              key={index}
              className="shadow-warm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-warm"
            >
              <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <category.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-coffee-dark">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-coffee-medium text-sm sm:text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <ul className="space-y-2 sm:space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-coffee-medium text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white mx-4 sm:mx-0">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Osobné prispôsobenie
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2">
            Máte špeciálne požiadavky? Radi prispôsobíme akékoľvek jedlo alebo
            nápoj presne podľa vašich predstáv a chuti.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/menu" className="w-full sm:w-auto">
              <Button
                variant="hero"
                size="lg"
                className="bg-white text-coffee-dark hover:bg-cream w-full sm:w-auto"
              >
                Kompletné menu
              </Button>
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full sm:w-auto"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
