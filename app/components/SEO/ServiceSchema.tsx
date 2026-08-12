type Props = {
  title: string;
  description: string;
};

export default function ServiceSchema({
  title,
  description,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: title,

    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Garden Route Epoxy Flooring",
      url: "https://gardenrouteepoxyflooring.co.za",
    },

    areaServed: {
      "@type": "Place",
      name: "Garden Route",
    },

    description,
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