function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.head.prepend(script);
}

console.log("loadScript");
loadScript("/js/navbar-curved.js");
