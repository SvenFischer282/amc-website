export const siteConfig = {
  // Site Information
  name: "AMC Breakky",
  tagline: "Raňajky & Brunch",
  description:
    "AMC Breakky - Prvá špecializovaná raňajkáreň v Spišskej Novej Vsi. Miesto, kde každý deň začína s chutnými raňajkami, brunchom a úsmevom.",

  // Contact Information
  contact: {
    phone: "+421 xxx xxx xxx",
    email: "info@amcbreakky.sk",
    address: {
      street: "Letná 54/47",
      city: "052 01 Spišská Nová Ves",
      country: "Slovakia",
      googleMapsUrl:
        "https://www.google.com/maps/place/Letn%C3%A1+54%2F47,+052+01+Spi%C5%A1sk%C3%A1+Nov%C3%A1+Ves,+Slovakia/",
    },
    social: {
      instagram: {
        breakky: "@amcbreakky",
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

  // Business Information
  business: {
    ico: "12345678", // Company registration number - to be updated with real number
    dic: "SK1234567890", // Tax identification number - to be updated with real number
    license: "Restaurant license number", // to be updated with real license
    registeredAddress: "Letná 54/47, 052 01 Spišská Nová Ves, Slovakia",
  },

  // Footer
  footer: {
    copyright: "© 2024 AMC Breakky. Všetky práva vyhradené.",
    madeWith: "Vytvorené s láskou pre milovníkov raňajok",
  },
} as const;

export type SiteConfig = typeof siteConfig;
