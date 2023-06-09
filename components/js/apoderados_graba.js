"use strict";

// import { helpHttp } from "/js/helpHttp.js";

console.log("---------------------------------------------------");
alert("aca");

document.getElementById("aceptar").onclick = function () {
  alert("aca click");
  const Apoderados_nombres = document.getElementById("nombres").value;
  const Apoderados_paterno = document.getElementById("paterno").value;
  const Apoderados_materno = document.getElementById("materno").value;
  const Apoderados_rut = document.getElementById("rut").value;
  const Apoderados_dv = document.getElementById("rut").value;
  const Apoderados_correo = document.getElementById("correo").value;
  const Apoderados_celular = document.getElementById("celular").value;
  const Apoderados_region = document.getElementById("regiones_select").value;
  const Apoderados_comuna = document.getElementById("comunas_select").value;
  let data = {
    RUT: Apoderados_rut,
    DV: Apoderados_dv,
    NOMBRES: Apoderados_nombres,
    APELLIDO_PATERNO: Apoderados_paterno,
    APELLIDO_MATERNO: Apoderados_materno,
    TELEFONO_MOVIL: Apoderados_celular,
    EMAIL: Apoderados_correo,
    TIPO_LOCAL_MESA: "2",
    CODIGO_REGION_VOTA: Apoderados_region,
    CODIGO_COMUNA_VOTA: Apoderados_comuna,
    CODIGO_LOCAL_VOTA: "0",
    MESA_VOTA: "0",
    PREFERENCIA_APODERADO: 0,
  };

  let options = {
    body: data,
    headers: { "content-type": "application/json" },
  };

  let apoderadosAPI =
    "https://zkt7kkizv4.execute-api.us-east-1.amazonaws.com/prod/putnuevoapoderado";

  let res = fetch(apoderadosAPI, options)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrio un Error",
          })
    )
    .catch((err) => err);
};
let json = res.json();
console.log(json);
