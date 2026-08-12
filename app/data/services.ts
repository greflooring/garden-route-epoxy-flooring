export interface Service {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  image: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  idealFor: string[];
  process: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
  };
}

export const services: Service[] = [
  {
    slug: "garage-epoxy-flooring",

    title: "Garage Epoxy Flooring",

    heroTitle: "Premium Garage Epoxy Flooring",

    heroSubtitle:
      "Transform your garage into a clean, seamless and durable space with professionally installed epoxy flooring built to withstand everyday use.",

    image: "/images/services/garage.jpg",

    shortDescription:
      "Premium epoxy flooring systems for residential garages throughout the Garden Route.",

    overview:
      "Our garage epoxy flooring systems are designed to transform ordinary concrete into a beautiful, durable surface that resists stains, tyre marks, chemicals and daily wear. Whether you use your garage for parking, storage or as a workshop, our seamless finishes create a space that's both practical and impressive.",

    benefits: [
      "Oil & chemical resistant",
      "Tyre friendly finish",
      "Easy to clean",
      "Dust-free surface",
      "Modern seamless appearance",
      "Long-lasting durability",
    ],

    idealFor: [
      "Residential garages",
      "Luxury homes",
      "Car enthusiasts",
      "Home workshops",
      "Storage areas",
    ],

    process: [
      "Concrete inspection",
      "Diamond grinding",
      "Surface repairs",
      "Primer application",
      "Epoxy installation",
      "Protective topcoat",
    ],

    faq: [
      {
        question: "How long does garage epoxy flooring last?",
        answer:
          "With proper preparation and professional installation, an epoxy garage floor can last well over 10 years.",
      },
      {
        question: "Can I park my vehicle on epoxy flooring?",
        answer:
          "Yes. Our systems are designed for everyday vehicle traffic and are resistant to tyre wear.",
      },
      {
        question: "Is epoxy easy to maintain?",
        answer:
          "Very. The seamless surface makes sweeping and cleaning quick and simple.",
      },
    ],

    seo: {
      title:
        "Garage Epoxy Flooring | Garden Route Epoxy Flooring",
      description:
        "Premium garage epoxy flooring in George, Mossel Bay, Hartenbos, Wilderness and throughout the Garden Route.",
    },
  },

  {
    slug: "commercial-epoxy-flooring",

    title: "Commercial Epoxy Flooring",

    heroTitle: "Commercial Epoxy Flooring",

    heroSubtitle:
      "Professional flooring systems for businesses that demand durability, cleanliness and a premium finish.",

    image: "/images/services/commercial.jpg",

    shortDescription:
      "Heavy-duty epoxy flooring for retail, offices, restaurants and commercial buildings.",

    overview:
      "Commercial spaces require flooring that looks professional while standing up to heavy daily traffic. Our commercial epoxy systems provide a seamless, hygienic and low-maintenance surface ideal for customer-facing businesses and work environments.",

    benefits: [
      "Professional appearance",
      "High traffic durability",
      "Easy maintenance",
      "Slip-resistant options",
      "Chemical resistant",
      "Long service life",
    ],

    idealFor: [
      "Retail stores",
      "Restaurants",
      "Offices",
      "Showrooms",
      "Reception areas",
      "Commercial buildings",
    ],

    process: [
      "Site inspection",
      "Surface preparation",
      "Concrete repairs",
      "Primer application",
      "Epoxy installation",
      "Protective topcoat",
    ],

    faq: [
      {
        question: "Can installations be completed after business hours?",
        answer:
          "Yes. We can schedule projects to minimise disruption to your business.",
      },
      {
        question: "Is epoxy suitable for busy commercial environments?",
        answer:
          "Absolutely. Our commercial systems are designed for constant daily use.",
      },
      {
        question: "Can I choose custom colours?",
        answer:
          "Yes. We offer a wide selection of colours and finishes.",
      },
    ],

    seo: {
      title:
        "Commercial Epoxy Flooring | Garden Route Epoxy Flooring",
      description:
        "Commercial epoxy flooring solutions for businesses across the Garden Route.",
    },
  },
    {
    slug: "industrial-epoxy-flooring",

    title: "Industrial Epoxy Flooring",

    heroTitle: "Heavy-Duty Industrial Epoxy Flooring",

    heroSubtitle:
      "Engineered flooring systems built to withstand demanding industrial environments and constant heavy-duty use.",

    image: "/images/services/industrial.jpg",

    shortDescription:
      "Industrial-grade epoxy flooring for factories, warehouses and workshops.",

    overview:
      "Our industrial epoxy flooring systems are designed for environments where durability is critical. Resistant to chemicals, impact, abrasion and heavy machinery, these flooring systems provide long-term performance with minimal maintenance.",

    benefits: [
      "Heavy-duty durability",
      "Forklift resistant",
      "Chemical resistant",
      "Abrasion resistant",
      "Easy maintenance",
      "Long service life",
    ],

    idealFor: [
      "Factories",
      "Warehouses",
      "Engineering workshops",
      "Manufacturing facilities",
      "Storage facilities",
      "Distribution centres",
    ],

    process: [
      "Concrete assessment",
      "Diamond grinding",
      "Surface repairs",
      "Industrial primer",
      "Epoxy installation",
      "Protective industrial topcoat",
    ],

    faq: [
      {
        question: "Can industrial epoxy handle forklifts?",
        answer:
          "Yes. Our heavy-duty systems are designed for forklift traffic and demanding industrial environments.",
      },
      {
        question: "Is epoxy resistant to chemicals?",
        answer:
          "Yes. Industrial epoxy flooring offers excellent resistance to oils, fuels and many industrial chemicals.",
      },
      {
        question: "How long will the floor last?",
        answer:
          "With proper maintenance, industrial epoxy flooring can provide many years of reliable performance.",
      },
    ],

    seo: {
      title:
        "Industrial Epoxy Flooring | Garden Route Epoxy Flooring",
      description:
        "Heavy-duty industrial epoxy flooring for factories, warehouses and workshops across the Garden Route.",
    },
  },

  {
    slug: "residential-epoxy-flooring",

    title: "Residential Epoxy Flooring",

    heroTitle: "Beautiful Residential Epoxy Flooring",

    heroSubtitle:
      "Modern seamless flooring designed to transform living spaces with exceptional durability and style.",

    image: "/images/services/residential.jpg",

    shortDescription:
      "Premium seamless epoxy flooring for modern homes.",

    overview:
      "Residential epoxy flooring provides homeowners with a stylish, seamless and highly durable alternative to traditional flooring. Perfect for entertainment areas, kitchens, laundry rooms and more, it combines easy maintenance with a premium finish.",

    benefits: [
      "Modern seamless appearance",
      "Easy to clean",
      "Highly durable",
      "Stain resistant",
      "Low maintenance",
      "Custom colours available",
    ],

    idealFor: [
      "Homes",
      "Entertainment areas",
      "Laundry rooms",
      "Studios",
      "Storage rooms",
      "Modern interiors",
    ],

    process: [
      "Floor inspection",
      "Surface preparation",
      "Concrete repairs",
      "Primer coat",
      "Epoxy application",
      "Protective topcoat",
    ],

    faq: [
      {
        question: "Is epoxy suitable inside the home?",
        answer:
          "Yes. Residential epoxy flooring is hygienic, durable and easy to maintain.",
      },
      {
        question: "Can I choose my own colour?",
        answer:
          "Absolutely. We offer a wide range of colours and finishes.",
      },
      {
        question: "Is epoxy slippery?",
        answer:
          "Slip-resistant finishes are available for additional safety.",
      },
    ],

    seo: {
      title:
        "Residential Epoxy Flooring | Garden Route Epoxy Flooring",
      description:
        "Premium residential epoxy flooring for homes throughout the Garden Route.",
    },
  },

  {
    slug: "metallic-epoxy-flooring",

    title: "Metallic Epoxy Flooring",

    heroTitle: "Luxury Metallic Epoxy Flooring",

    heroSubtitle:
      "Create a one-of-a-kind floor with stunning metallic effects and exceptional durability.",

    image: "/images/services/metallic.jpg",

    shortDescription:
      "Luxury metallic epoxy flooring with unique artistic finishes.",

    overview:
      "Metallic epoxy flooring combines performance with striking visual appeal. Every floor is individually created, producing unique patterns, depth and movement that transform ordinary spaces into showpieces.",

    benefits: [
      "Luxury appearance",
      "Unique artistic finish",
      "High-gloss surface",
      "Easy maintenance",
      "Extremely durable",
      "Custom colour combinations",
    ],

    idealFor: [
      "Luxury homes",
      "Showrooms",
      "Reception areas",
      "Restaurants",
      "Offices",
      "Feature spaces",
    ],

    process: [
      "Concrete preparation",
      "Primer application",
      "Metallic epoxy installation",
      "Artistic blending",
      "Protective clear coat",
      "Final inspection",
    ],

    faq: [
      {
        question: "Will my floor look exactly like another project?",
        answer:
          "No. Every metallic epoxy floor is unique, creating an individual finish.",
      },
      {
        question: "Can I choose the colours?",
        answer:
          "Yes. Metallic pigments can be customised to suit your space.",
      },
      {
        question: "Is metallic epoxy durable?",
        answer:
          "Absolutely. It provides the same durability as premium epoxy systems while delivering a luxury finish.",
      },
    ],

    seo: {
      title:
        "Metallic Epoxy Flooring | Garden Route Epoxy Flooring",
      description:
        "Luxury metallic epoxy flooring for homes and commercial spaces throughout the Garden Route.",
    },
  },
    {
    slug: "decorative-flake-flooring",

    title: "Decorative Flake Flooring",

    heroTitle: "Decorative Flake Epoxy Flooring",

    heroSubtitle:
      "Slip-resistant decorative flake flooring that combines durability with modern style for residential and commercial spaces.",

    image: "/images/services/flake.jpg",

    shortDescription:
      "Decorative flake epoxy flooring available in a wide range of colours and finishes.",

    overview:
      "Decorative flake flooring is one of the most popular epoxy systems thanks to its attractive appearance, excellent durability and slip-resistant finish. Available in various colour blends, it creates a professional floor that's easy to maintain and built for everyday use.",

    benefits: [
      "Decorative appearance",
      "Slip-resistant finish",
      "UV stable options",
      "Easy maintenance",
      "Highly durable",
      "Wide colour selection",
    ],

    idealFor: [
      "Garages",
      "Patios",
      "Workshops",
      "Showrooms",
      "Commercial spaces",
      "Residential properties",
    ],

    process: [
      "Surface preparation",
      "Concrete repairs",
      "Primer application",
      "Epoxy basecoat",
      "Flake broadcast",
      "Protective clear topcoat",
    ],

    faq: [
      {
        question: "Is decorative flake flooring slippery?",
        answer:
          "No. The flake system provides additional grip, making it a popular choice for garages and commercial spaces.",
      },
      {
        question: "Can I choose the flake colour?",
        answer:
          "Yes. We offer a wide range of decorative flake blends and colour combinations.",
      },
      {
        question: "Is it suitable outdoors?",
        answer:
          "Certain systems can be installed outdoors depending on the project requirements.",
      },
    ],

    seo: {
      title:
        "Decorative Flake Flooring | Garden Route Epoxy Flooring",
      description:
        "Premium decorative flake epoxy flooring for garages, patios and commercial spaces throughout the Garden Route.",
    },
  },

  {
    slug: "stone-carpet-flooring",

    title: "Stone Carpet Flooring",

    heroTitle: "Premium Stone Carpet Flooring",

    heroSubtitle:
      "Natural stone carpet flooring that creates a beautiful, seamless and highly durable finish for indoor and outdoor spaces.",

    image: "/images/services/stone-carpet.jpg",

    shortDescription:
      "Luxury stone carpet flooring for patios, entrances, pool surrounds and more.",

    overview:
      "Stone carpet flooring combines natural stone aggregates with advanced resin systems to create an elegant, hard-wearing and low-maintenance surface. It offers excellent drainage, outstanding durability and a premium appearance for residential and commercial applications.",

    benefits: [
      "Natural stone finish",
      "Excellent drainage",
      "UV resistant",
      "Slip resistant",
      "Low maintenance",
      "Luxury appearance",
    ],

    idealFor: [
      "Patios",
      "Pool surrounds",
      "Walkways",
      "Entrances",
      "Balconies",
      "Outdoor entertainment areas",
    ],

    process: [
      "Surface preparation",
      "Primer application",
      "Stone and resin mixing",
      "Professional installation",
      "Finishing",
      "Final inspection",
    ],

    faq: [
      {
        question: "What is stone carpet flooring?",
        answer:
          "Stone carpet is made from natural stone aggregates bound together with a premium resin to create a durable decorative surface.",
      },
      {
        question: "Can it be installed outside?",
        answer:
          "Yes. Stone carpet is an excellent choice for patios, walkways, pool surrounds and other outdoor spaces.",
      },
      {
        question: "Does water drain through it?",
        answer:
          "Yes. Depending on the system and substrate, stone carpet can provide excellent drainage.",
      },
    ],

    seo: {
      title:
        "Stone Carpet Flooring | Garden Route Epoxy Flooring",
      description:
        "Premium stone carpet flooring installations across George, Mossel Bay and the Garden Route.",
    },
  },
];