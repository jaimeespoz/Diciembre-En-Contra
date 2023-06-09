export function ppal() {
  let menuToggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");

  menuToggle.onclick = function () {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  let list = document.querySelectorAll(".list");
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      let j = 0;
      while (j < list.length) {
        list[j++].className = "list";
      }
      list[i].className = "list active";
    };
  }
}

// const d = document;
// const aceptar = document.getElementById("aceptar");
// const chequeado = document.getElementById("myCheck");
// const usuario = document.getElementById("usuario");
// const clave = document.getElementById("clave");

// aceptar.addEventListener("click", (e) => {
//   if (!chequeado) {
//     alert("Debe ...");
//   }
//   // if (usuario.value === "") {
//   //   alert("Usuario ...");
//   // }
//   // if (clave.value === "") {
//   //   alert("Clave ...");
//   // }
//   window.location.href = "/ppal";
// });
