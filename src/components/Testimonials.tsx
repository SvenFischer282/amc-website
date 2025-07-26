import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Mária Nováková",
    rating: 5,
    text: "Najlepšie raňajky v Spišskej Novej Vsi! Káva je výborná a personál je vždy milý a usmiaty. Cítim sa tu ako doma.",
    date: "Pred 2 týždňami",
  },
  {
    id: 2,
    name: "Peter Kováč",
    rating: 5,
    text: "Úžasné miesto pre ranný kávový rituál. Espresso je perfektné a croissanty sú čerstvé každý deň. Určite odporúčam!",
    date: "Pred mesiacom",
  },
  {
    id: 3,
    name: "Jana Svobodová",
    rating: 5,
    text: "Prvá špecializovaná kaviarňa v meste a stále najlepšia! Milujeme víkendové brunche a príjemnú atmosféru.",
    date: "Pred 3 týždňami",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Čo hovoria naši zákazníci
            </h2>
            <Quote className="h-8 w-8 text-primary rotate-180" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sme hrdí na našu komunitu spokojných zákazníkov, ktorí sa k nám radi
            vracajú
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="text-foreground leading-relaxed mb-4">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Overený zákazník
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pridajte sa k našej komunite!
            </h3>
            <p className="text-muted-foreground mb-6">
              Navštívte nás a presvedčte sa sami, prečo nás naši zákazníci
              milujú
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://instagram.com/amcbreakky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <Star className="h-5 w-5" />
                Sledujte nás na Instagrame
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-semibold cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("visit");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                Navštívte nás
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
