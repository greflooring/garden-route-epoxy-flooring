export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://gardenrouteepoxyflooring.co.za",
    name: "Garden Route Epoxy Flooring",
    url: "https://gardenrouteepoxyflooring.co.za",
    logo: "https://gardenrouteepoxyflooring.co.za/images/logo/logo-white.png",
    image: "https://gardenrouteepoxyflooring.co.za/opengraph-image",
    description:
      "Premium epoxy and stone carpet flooring specialists serving the Garden Route.",

    telephone: "+27 61 069 2503",

    email: "info@gardenrouteepoxy.co.za",

    areaServed: [
      "George",
      "Mossel Bay",
      "Hartenbos",
      "Wilderness",
      "Knysna",
      "Plettenberg Bay",
      "Great Brak River",
      "Sedgefield",
      "Garden Route",
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
      addressRegion: "Western Cape",
    },

    openingHours: "Mo-Fr 08:00-17:00",

    sameAs: [],

    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}