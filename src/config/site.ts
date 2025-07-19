export const siteConfig = {
  // Site Information
  name: "AMC Tvoj Coffeeshop",
  tagline: "& Breakky",
  description:
    "Prvá specialty coffeeshop v Spišskej Novej Vsi. Miesto, kde sa káva stretáva s priateľstvom a každé ráno začína s úsmevom.",

  // Contact Information
  contact: {
    phone: "+421 xxx xxx xxx",
    email: "info@amccoffeeshop.sk",
    address: {
      street: "Ing. Straku 9003",
      city: "052 01 Spišská Nová Ves",
      country: "Slovakia",
    },
    social: {
      instagram: {
        coffeeshop: "@amctvojcoffeeshop",
        breakky: "@amcbreakky",
        coffeeshopUrl: "https://instagram.com/amctvojcoffeeshop",
        breakkyUrl: "https://instagram.com/amcbreakky",
      },
    },
  },

  // Opening Hours
  openingHours: {
    weekdays: {
      days: "Pondelok - Piatok",
      hours: "6:00 - 22:00",
      description: "Pracovné dni",
    },
    saturday: {
      days: "Sobota",
      hours: "8:00 - 22:00",
      description: "Víkend",
    },
    sunday: {
      days: "Nedeľa",
      hours: "8:00 - 19:00",
      description: "Nedele",
    },
  },

  // Navigation
  navigation: {
    main: [
      { name: "O nás", href: "#about" },
      { name: "Menu", href: "#menu" },
      { name: "Galéria", href: "#gallery" },
      { name: "Navštívte nás", href: "#visit" },
    ],
  },

  // Footer
  footer: {
    copyright: "© 2024 AMC Tvoj Coffeeshop & Breakky. Všetky práva vyhradené.",
    madeWith: "Vytvorené s láskou pre našu komunitu",
  },
} as const;

export type SiteConfig = typeof siteConfig;
