let $main_comunas = document.querySelector(".comunas_select");

let comunasAPI =
  "https://zkt7kkizv4.execute-api.us-east-1.amazonaws.com/prod/getcomunas/";

async function loadComunas(url, region) {
  try {
    // console.log(url + region);
    let res = await fetch(url + region);
    let json = await res.json(),
      $template = "";
    let comunas = json.comunas;
    // console.log(comunas);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    $template += `<option value="">-- Elija una Comuna --</option>`;
    for (let i = 0; i < comunas.length; i++) {
      try {
        $template += `<option value="${comunas[i].CODIGO}">${comunas[i].DESCRIPCION}</option>`;
      } catch (err) {
        let message = err.statusText || "Ocurrio un Error";
        $template += `<option value="">${err.status}:${message}</option>`;
      }
    }
    $main_comunas.innerHTML = $template;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrio un Error";
    $main_comunas.innerHTML = `<p>Error ${err.status}:${message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", (e) =>
  loadComunas(comunasAPI, "01")
);

// document.addEventListener("click", (e) => {
//   if (e.target.matches(".links a")) {
//     e.preventDefault();
//     loadRegiones(e.target.getAttribute("href"));
//   }
// });
