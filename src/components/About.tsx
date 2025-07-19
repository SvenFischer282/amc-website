import { Heart, Users, Award, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
                Naš príbeh
              </h2>
              <p className="text-xl text-coffee-medium leading-relaxed mb-6">
                AMC bola prvá specialty coffeeshop v Spišskej Novej Vsi. Od nášho otvorenia 
                sme sa stali miestom, kde sa stretávajú priatelia, kde sa rodí komunita 
                a kde každý zákazník sa cíti ako doma.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Veríme, že dobrá káva spája ľudí. Preto si každý šálok pripravujeme s láskou, 
                každé jedlo čerstvo pripravujeme na objednávku a každého hosťa privítame s úsmevom.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-soft">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-coffee-dark mb-2">Prvá v meste</h3>
                <p className="text-sm text-muted-foreground">Specialty coffeeshop</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-soft">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-coffee-dark mb-2">Komunita</h3>
                <p className="text-sm text-muted-foreground">Miesto stretnutí</p>
              </div>
            </div>

            <Button variant="coffee" size="lg">
              Naše hodnoty
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-warm transform hover:scale-105 transition-all duration-300">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-coffee-dark mb-4">S láskou pripravené</h3>
              <p className="text-muted-foreground leading-relaxed">
                Každý šálok kávy, každé jedlo pripravujeme s pozornosťou k detailu 
                a s láskou k remeslu. Používame len tie najkvalitnejšie suroviny.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-warm transform hover:scale-105 transition-all duration-300">
              <Coffee className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-coffee-dark mb-4">Čerstvosť na prvom mieste</h3>
              <p className="text-muted-foreground leading-relaxed">
                Všetko pripravujeme čerstvé na objednávku. Od ranného breakky 
                až po večernú kávu - vždy čerstvé, vždy chutné.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-warm transform hover:scale-105 transition-all duration-300">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-coffee-dark mb-4">Priateľské prostredie</h3>
              <p className="text-muted-foreground leading-relaxed">
                U nás nie ste len zákazníci, ste súčasťou našej kávovarej rodiny. 
                Každý hosť je pre nás dôležitý.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}