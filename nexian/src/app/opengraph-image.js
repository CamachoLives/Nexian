import { renderSocialImage } from "@/parts/seo/socialImage";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.legalName} — ${siteConfig.description}`;
export { size, contentType } from "@/parts/seo/socialImage";

export default function OpengraphImage() {
  return renderSocialImage();
}
