import { ImageResponse } from "next/og";

export const alt = "Garden Route Epoxy Flooring";
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
            fontSize: 34,
            color: "#D4AF37",
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          Garden Route Epoxy Flooring
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 30,
            fontSize: 72,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Premium Epoxy &
          <br />
          Stone Carpet Flooring
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            color: "#D0D0D0",
          }}
        >
          Beautiful • Durable • Built To Last
        </div>
      </div>
    ),
    size
  );
}
