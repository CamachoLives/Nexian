"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES, ROUTE_LABELS } from "@/config/routes";

function formatSegment(segment) {
  const text = decodeURIComponent(segment).replace(/-/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { href: ROUTES.inicio, label: ROUTE_LABELS[ROUTES.inicio] },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      return { href, label: ROUTE_LABELS[href] ?? formatSegment(segment) };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList" className="breadcrumb-items">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="breadcrumb-item" key={crumb.href}>
              {index > 0 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
              {isLast ? (
                <span itemProp="name" className="breadcrumb-active" aria-current="page">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} itemProp="item"><span itemProp="name">{crumb.label}</span></Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
