const navLinkEls = document.querySelectorAll(".list");
const windowPathname = window.location.href;

function extractPage(page) {
  let pagina = page.trim();
  let largo = pagina.length;
  let posicion = pagina.lastIndexOf("/") + 1;
  let retorno = pagina.substring(posicion, largo);
  return retorno;
}

// navLinkEls.forEach((navLinkEL) => {
//   navLinkEL.classList.remove("active");
// });

navLinkEls.forEach((navLinkEL) => {
  // console.log(navLinkEL);

  if (extractPage(windowPathname) === extractPage(navLinkEL.baseURI)) {
    console.log("aca: " + windowPathname + " " + navLinkEL.baseURI);

    // if (
    //   navLinkEL.firstElementChild.baseURI.includes(extractPage(windowPathname))
    // ) {
    // navLinkEL.classList.add("active");
    // }
  }
});
