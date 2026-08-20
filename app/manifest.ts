import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Garden Route Epoxy Flooring",
    short_name: "GRE Flooring",
    description:
      "Premium epoxy and stone carpet flooring throughout the Garden Route.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#D4AF37",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}