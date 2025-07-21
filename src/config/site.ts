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
      googleMapsUrl:
        "https://www.google.com/maps/place/AMC+Tvoj+Coffeeshop/@48.9467504,20.5594334,17z/data=!4m15!1m8!3m7!1s0x473e4f2abdc3f633:0x417fb5d0019c8364!2zSW5nLiBTdHJha3UsIDA1MiAwMSBTcGnFoXNrw6EgTm92w6EgVmVz!3b1!8m2!3d48.9467504!4d20.5620083!16s%2Fg%2F1tgfvdcj!3m5!1s0x473e4f2abb95922b:0xad6059a5ba131be2!8m2!3d48.9462837!4d20.5616138!16s%2Fg%2F11g6sr8gy1?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
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
      hours: "8:00 - 19:00",
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
