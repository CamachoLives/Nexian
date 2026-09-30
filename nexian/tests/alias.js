import { registerHooks } from "node:module";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Las pruebas corren con node --test, sin bundler, así que ni el alias "@/" de
// jsconfig.json ni la extensión implícita significan nada para Node. Este hook
// traduce el alias a src/ y añade .js, para poder importar la configuración
// igual que la importan los componentes.
const srcUrl = pathToFileURL(resolve(import.meta.dirname, "../src") + "/").href;

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (!specifier.startsWith("@/")) return nextResolve(specifier, context);

    const path = specifier.slice(2);
    const withExtension = /\.[a-z]+$/.test(path) ? path : `${path}.js`;

    return nextResolve(new URL(withExtension, srcUrl).href, context);
  },
});
