import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gardenrouteepoxyflooring.co.za/sitemap.xml",
    host: "https://gardenrouteepoxyflooring.co.za",
  };
}