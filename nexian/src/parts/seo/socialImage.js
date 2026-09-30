import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// Tamaño recomendado por Open Graph y por las tarjetas grandes de Twitter.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Paleta tomada de src/css/globals.css para que la tarjeta social
// se vea como el sitio.
const colors = {
  background: "#121212",
  surface: "#0e0e0e",
  text: "#c1c1c1",
  primary: "#4295c6",
  secondary: "#89f7ff",
};

/**
 * Tarjeta social del sitio, generada en el build (no hay que mantener un PNG).
 * @param {string} title Titular de la tarjeta.
 * @param {string} subtitle Texto secundario.
 */
export function renderSocialImage({ title = siteConfig.legalName, subtitle = siteConfig.description } = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.surface} 100%)`,
          borderTop: `16px solid ${colors.primary}`,
        }}
      >
        <div style={{ fontSize: 34, color: colors.secondary, letterSpacing: 6, textTransform: "uppercase" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 76, color: "#ffffff", lineHeight: 1.15, marginTop: 28 }}>
          {title}
        </div>
        <div style={{ fontSize: 32, color: colors.text, lineHeight: 1.4, marginTop: 32 }}>
          {subtitle}
        </div>
      </div>
    ),
    size,
  );
}
