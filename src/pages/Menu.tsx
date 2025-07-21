import { Coffee, UtensilsCrossed, Cake, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/site";

export default function Menu() {
  const coffeeMenu = [
    {
      name: "Espresso",
      price: "1,50 €",
      description: "Klasické silné espresso z našej specialty kávy",
      popular: true,
    },
    {
      name: "Americano",
      price: "2,00 €",
      description: "Espresso s horúcou vodou, jemná a čistá chuť",
    },
    {
      name: "Cappuccino",
      price: "2,80 €",
      description: "Espresso s mliečnou penou a latte art",
      popular: true,
    },
    {
      name: "Flat White",
      price: "3,20 €",
      description: "Silnejšie espresso s jemne napeneným mliekom",
    },
    {
      name: "Latte",
      price: "3,00 €",
      description: "Mliečna káva s krásnym latte art",
    },
    {
      name: "Cold Brew",
      price: "3,50 €",
      description: "Studená káva z 12-hodinového extraktu",
      seasonal: true,
    },
    {
      name: "Chai Latte",
      price: "3,20 €",
      description: "Korená mliečna káva s orientálnou chuťou",
    },
    {
      name: "Hot Chocolate",
      price: "2,80 €",
      description: "Bohatá horúca čokoláda s bitou šľahačkou",
    },
  ];

  const breakfastMenu = [
    {
      name: "Classic Breakfast",
      price: "7,50 €",
      description: "Vajíčka, slanina, klobása, toast, zelenina",
      popular: true,
    },
    {
      name: "Avocado Toast",
      price: "6,80 €",
      description: "Avokádo na kváskový chlieb s cherry paradajkami",
      healthy: true,
    },
    {
      name: "AMC Pancakes",
      price: "5,90 €",
      description: "Domáce pancakes s ovocím a javorovým sirupom",
      popular: true,
    },
    {
      name: "Croissant Sandwich",
      price: "4,50 €",
      description: "Čerstvý croissant so šunkou a syrom",
    },
    {
      name: "Healthy Bowl",
      price: "8,20 €",
      description: "Quinoa, avokádo, vajíčko, špenát, cherry paradajky",
      healthy: true,
    },
    {
      name: "French Toast",
      price: "6,20 €",
      description: "Francúzsky toast s ovocím a škoricou",
    },
    {
      name: "Yogurt Parfait",
      price: "4,80 €",
      description: "Grécky jogurt s granolou a sezónnym ovocím",
      healthy: true,
    },
    {
      name: "Scrambled Eggs",
      price: "5,50 €",
      description: "Miešané vajíčka s bylinkami a toast",
    },
  ];

  const pastryMenu = [
    {
      name: "Croissant",
      price: "2,20 €",
      description: "Klasický maslový croissant",
      fresh: true,
    },
    {
      name: "Pain au Chocolat",
      price: "2,80 €",
      description: "Croissant s tmavou čokoládou",
    },
    {
      name: "Muffin",
      price: "2,50 €",
      description: "Denné variety - čučoriedkový, čokoládový",
      fresh: true,
    },
    {
      name: "Cheesecake",
      price: "4,20 €",
      description: "Domáci cheesecake s ovocím",
    },
    {
      name: "Brownie",
      price: "3,80 €",
      description: "Čokoládový brownie s orechmi",
    },
    {
      name: "Tiramisu",
      price: "4,50 €",
      description: "Klasické talianske tiramisu",
      popular: true,
    },
    {
      name: "Carrot Cake",
      price: "4,00 €",
      description: "Mrkvový koláč s krémom z mascarpone",
    },
    {
      name: "Danish Pastry",
      price: "3,20 €",
      description: "Dánske pečivo s ovocím alebo tvarohom",
    },
  ];

  const MenuSection = ({ title, icon: Icon, items, description }: any) => (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-coffee-dark">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item: any, index: number) => (
          <Card
            key={index}
            className="shadow-soft hover:shadow-warm transition-all duration-300 border-0 bg-gradient-warm"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-coffee-dark">
                  {item.name}
                </h3>
                <span className="font-bold text-primary text-lg">
                  {item.price}
                </span>
              </div>
              <p className="text-coffee-medium text-sm mb-3">
                {item.description}
              </p>
              <div className="flex gap-2">
                {item.popular && (
                  <Badge variant="default" className="bg-primary">
                    Obľúbené
                  </Badge>
                )}
                {item.healthy && (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    Zdravé
                  </Badge>
                )}
                {item.seasonal && (
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    Sezónne
                  </Badge>
                )}
                {item.fresh && (
                  <Badge
                    variant="outline"
                    className="border-orange-400 text-orange-600"
                  >
                    Čerstvé
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />

      {/* Page Header */}
      <div className="bg-white shadow-soft pt-8">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-dark mb-4">
              Naše Menu
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              Čerstvo pripravené s láskou
            </p>
            <div className="flex items-center justify-center gap-2 text-coffee-medium"></div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Special Notice */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-xl text-coffee-dark mb-2">
              Osobné prispôsobenie
            </h3>
            <p className="text-coffee-medium">
              Všetky jedlá pripravujeme na objednávku a radi ich prispôsobíme
              vašim potrebám. Máte alergiu alebo špeciálne požiadavky? Stačí sa
              opýtať!
            </p>
          </CardContent>
        </Card>

        {/* Menu Sections */}
        <MenuSection
          title="Káva & Nápoje"
          icon={Coffee}
          description="Specialty kávy pripravené s láskou"
          items={coffeeMenu}
        />

        <MenuSection
          title="Raňajky & Jedlá"
          icon={UtensilsCrossed}
          description="Čerstvo pripravené na objednávku"
          items={breakfastMenu}
        />

        <MenuSection
          title="Pečivo & Dezerty"
          icon={Cake}
          description="Domáce sladkosti a pečivo"
          items={pastryMenu}
        />

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white mt-12">
          <h3 className="text-3xl font-bold mb-4">Objednajte si teraz</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Zavolajte nám alebo príďte osobne. Radi pre vás pripravíme čokoľvek
            z nášho menu presne podľa vašich predstáv.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="bg-white text-coffee-dark hover:bg-cream"
            >
              Zavolať: {siteConfig.contact.phone}
            </Button>
            <Link to="/#visit">
              <Button variant="warm" size="lg">
                Navštívte nás
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
