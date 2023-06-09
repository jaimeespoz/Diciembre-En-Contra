/*
-----------------------------------------------------------------------------------
*/
export function includeHTML(el, url) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      el.outerHTML = xhr.responseText;
    } else {
      let message = xhr.statusText || "Error al cargar el archivo";
      el.outerHTML = `<div><p>Error ${xhr.status}:${message}</p></div>`;
    }
  });

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
  xhr.send();
}
/*
-----------------------------------------------------------------------------------
*/
export function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.body.prepend(script);
}
/*
-----------------------------------------------------------------------------------
*/
export function includeJs(jsFilePath) {
  var js = d.createElement("script");

  js.type = "text/javascript";
  js.src = jsFilePath;
  d.head.appendChild(js);
}
/*
-----------------------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------------------
*/
