import assert from "node:assert/strict";
import { readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

import { ROUTES, ROUTE_LABELS } from "@/config/routes";
import { REDIRECTS } from "@/config/redirects";

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), "../src/app");
const routePaths = Object.values(ROUTES);

/** Rutas que el App Router sirve realmente, deducidas de los page.js. */
function routesOnDisk(dir = appDir, prefix = "") {
  const found = [];

  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);

    if (entry === "page.js") {
      found.push(prefix === "" ? "/" : prefix);
      continue;
    }
    // Los grupos de rutas y las carpetas privadas no cuentan como segmento.
    if (entry.startsWith("_") || entry.startsWith("(")) continue;
    if (statSync(full).isDirectory()) found.push(...routesOnDisk(full, `${prefix}/${entry}`));
  }

  return found;
}

test("cada ruta de ROUTES tiene una etiqueta en ROUTE_LABELS", () => {
  for (const path of routePaths) {
    assert.ok(ROUTE_LABELS[path], `falta la etiqueta de ${path}`);
  }
});

test("ROUTE_LABELS no describe rutas que no existan en ROUTES", () => {
  for (const path of Object.keys(ROUTE_LABELS)) {
    assert.ok(routePaths.includes(path), `${path} tiene etiqueta pero no está en ROUTES`);
  }
});

test("ROUTES no repite ninguna ruta", () => {
  assert.equal(new Set(routePaths).size, routePaths.length, "hay rutas duplicadas en ROUTES");
});

test("cada ruta de ROUTES corresponde a un page.js", () => {
  const onDisk = routesOnDisk();

  for (const path of routePaths) {
    assert.ok(onDisk.includes(path), `${path} está en ROUTES pero no tiene page.js`);
  }
});

test("toda página con page.js está registrada en ROUTES", () => {
  for (const path of routesOnDisk()) {
    assert.ok(routePaths.includes(path), `${path} existe en src/app pero no está en ROUTES`);
  }
});

test("cada redirección apunta a una ruta canónica existente", () => {
  for (const [from, to] of Object.entries(REDIRECTS)) {
    assert.ok(routePaths.includes(to), `${from} redirige a ${to}, que no está en ROUTES`);
  }
});

test("ninguna redirección parte de una ruta que el sitio sirve", () => {
  for (const from of Object.keys(REDIRECTS)) {
    assert.ok(!routePaths.includes(from), `${from} es una ruta real y a la vez una redirección`);
  }
});

test("las claves de REDIRECTS están normalizadas como las espera el proxy", () => {
  for (const from of Object.keys(REDIRECTS)) {
    assert.equal(from, from.toLowerCase(), `${from} tiene mayúsculas`);
    assert.ok(from.startsWith("/"), `${from} no empieza por "/"`);
    assert.ok(from === "/" || !from.endsWith("/"), `${from} acaba en "/"`);
  }
});

test("ninguna redirección encadena con otra", () => {
  for (const [from, to] of Object.entries(REDIRECTS)) {
    assert.ok(!(to in REDIRECTS), `${from} redirige a ${to}, que redirige otra vez`);
  }
});
