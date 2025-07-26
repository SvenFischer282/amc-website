import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import breakfastImage from "@/assets/breakfast-plate.jpg";
import pastriesImage from "@/assets/pastries.jpg";
import cafeImage from "@/assets/cafe-interior.jpg";
import heroImage from "@/assets/hero-coffee.jpg";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);
  const galleryImages = [
    {
      src: heroImage,
      alt: "Latte art a káva AMC",
      category: "coffee",
    },
    {
      src: breakfastImage,
      alt: "Čerstvé raňajky",
      category: "food",
    },
    {
      src: pastriesImage,
      alt: "Domáce pečivo",
      category: "pastry",
    },
    {
      src: cafeImage,
      alt: "Interiér kaviarne",
      category: "interior",
    },
    {
      src: heroImage,
      alt: "Specialty káva",
      category: "coffee",
    },
    {
      src: breakfastImage,
      alt: "Zdravý breakfast bowl",
      category: "food",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Galéria chutí
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pozrite si naše najkrajšie raňajkové momenty, chutné jedlá a
            atmosféru, ktorá robí AMC Breakky jedinečným miestom na brunch.
          </p>
        </div>

        {/* Instagram Info */}
        <div className="bg-white rounded-2xl p-8 mb-12 text-center shadow-warm">
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <Instagram className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-coffee-dark">@amcbreakky</h3>
              <p className="text-sm text-muted-foreground">Raňajky & brunch</p>
            </div>
            {/*  */}
          </div>
          <p className="text-coffee-medium mb-6">
            Sledujte nás na Instagrame pre najnovšie fotky, špeciálne ponuky a
            denné menu
          </p>
          <a
            href="https://instagram.com/amcbreakky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="coffee" size="lg" className="group">
              Sledovať na Instagrame
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <Dialog
              key={index}
              open={selectedImage?.src === image.src}
              onOpenChange={(open) => !open && setSelectedImage(null)}
            >
              <DialogTrigger asChild>
                <div
                  className="relative group overflow-hidden rounded-lg shadow-soft hover:shadow-warm transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 bg-transparent border-0 shadow-none flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-coffee-dark mb-4">
            Zdieľajte svoje zážitky
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Označte nás na svojich fotkách hashtag-om #AMCBreakky a my ich
            zdieľame na našom profile!
          </p>
          <a
            href="https://instagram.com/explore/tags/AMCBreakky/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="warm" size="lg">
              #AMCBreakky
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
