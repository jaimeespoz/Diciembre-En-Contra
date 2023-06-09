import apoderados_ingreso_validaciones from "./apoderados_validacion.js";

const d = document;

export function includeJs(jsFilePath) {
  var js = d.createElement("script");

  js.type = "text/javascript";
  js.src = jsFilePath;
  d.head.appendChild(js);
}

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.body.prepend(script);
}
// loadScript("/assets/plugin/scrollreveal.min.js");

// const ScrollReveal = await import("/assets/plugin/scrollreveal.min.js");

d.addEventListener("DOMContentLoaded", (e) => {
  // loadScript("/assets/plugin/scrollreveal.min.js");
  // import { ScrollReveal } from "/assets/plugin/scrollreveal.min.js";
  // loadScript("/assets/plugin/scrollreveal.min.js");
  // includeHTML();
  // ppal();
  // apoderados_ingreso_validaciones();
});
