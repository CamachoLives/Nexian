"use client";

import { HeaderNavData } from "@/data/header/HeaderNavData";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Cerrar al navegar cubre también el botón "atrás" del navegador, que no
  // dispara el onClick de los enlaces. Se ajusta durante el render en lugar
  // de con un efecto, que sería un repintado de más.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  // Con el menú abierto: Escape lo cierra y el fondo no se desplaza.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // "page" en la página exacta y "true" en la sección que la contiene.
  const currentState = (href) => {
    if (pathname === href) return "page";
    if (href !== ROUTES.inicio && pathname.startsWith(`${href}/`)) return "true";
    return undefined;
  };

  return (
    <div className="main-nav-container">
      <div className="view-mobile mobile-menu-button">
        <button type="button" className={`mobile-menu-icon ${menuOpen ? "active-mobile-menu-icon" : ""}`} aria-label={menuOpen ? "Cerrar menú principal" : "Abrir menú principal"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <nav aria-label="Navegación principal" className={`main-nav ${menuOpen ? "active-mobile-menu" : ""}`}>
        <button type="button" aria-label="Cerrar menú principal" className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <ul className="main-menu">
          {HeaderNavData.map((item) => (
            <li
              key={item.label}
              className={`main-menu-item level-1 ${item.children ? "has-children" : ""}`}
            >
              {item.children ? (
                <>
                  <Link
                    className="main-menu-link level-1-link"
                    aria-haspopup="true"
                    aria-current={currentState(item.href)}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>

                  <ul className="sub-menu">
                    {item.children.map((child) => (
                      <li key={child.label} className="sub-menu-item">
                        <Link
                          href={child.href}
                          className="main-menu-link sub-menu-link"
                          aria-current={currentState(child.href)}
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="main-menu-link level-1-link"
                  aria-current={currentState(item.href)}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}