import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Garden Route Epoxy Flooring";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#080808",
          color: "white",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: "#D4AF37",
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          Garden Route Epoxy Flooring
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 82,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Premium Epoxy & Stone
          <br />
          Flooring
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 32,
            color: "#CFCFCF",
          }}
        >
          Residential • Commercial • Industrial
        </div>
      </div>
    ),
    size
  );
}