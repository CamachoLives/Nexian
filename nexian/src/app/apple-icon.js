import { ImageResponse } from "next/og";

// Tamaño que iOS usa para el icono de la pantalla de inicio.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icono de marca para iOS, que no admite favicon en SVG. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #121212 0%, #0e0e0e 100%)",
          color: "#89f7ff",
          fontSize: 118,
        }}
      >
        N
      </div>
    ),
    size,
  );
}
