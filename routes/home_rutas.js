const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) => {
    res.render("home/home.html");
  })
  .get("/inicial", (req, res) => {
    res.render("inicial/inicial.html");
  })
  .get("/login", (req, res) => {
    res.render("home/login.html");
  })
  .get("/registrarse", (req, res) => {
    res.render("home/registrarse.html");
  })
  .get("/contacto", (req, res) => {
    res.render("home/contacto.html");
  })
  .get("/quienes_somos", (req, res) => {
    res.render("home/quienes_somos.html");
  })
  .get("/mision_vision", (req, res) => {
    res.render("home/mision_vision.html");
  })
  .get("/privacidad(/*)?", (req, res) => {
    res.render("terminos_condiciones/privacidad.html");
  })
  .get("/terminos_uso(/*)?", (req, res) => {
    res.render("terminos_condiciones/terminos_uso.html");
  })
  .get("/seguridad(/*)?", (req, res) => {
    res.render("terminos_condiciones/seguridad.html");
  })
  .get("/bordes", (req, res) => {
    res.render("bordes/bordes.html");
  })
  .get("/borde_01", (req, res) => {
    res.render("bordes/borde_01.html");
  })
  .get("/borde_02", (req, res) => {
    res.render("bordes/borde_02.html");
  })
  .get("/borde_03", (req, res) => {
    res.render("bordes/borde_03.html");
  })
  .get("/borde_04", (req, res) => {
    res.render("bordes/borde_04.html");
  })
  .get("/borde_05", (req, res) => {
    res.render("bordes/borde_05.html");
  })
  .get("/borde_06", (req, res) => {
    res.render("bordes/borde_06.html");
  })
  .get("/borde_07", (req, res) => {
    res.render("bordes/borde_07.html");
  })
  .get("/borde_08", (req, res) => {
    res.render("bordes/borde_08.html");
  })
  .get("/borde_09", (req, res) => {
    res.render("bordes/borde_09.html");
  })
  .get("/borde_10", (req, res) => {
    res.render("bordes/borde_10.html");
  })
  .get("/borde_11", (req, res) => {
    res.render("bordes/borde_11.html");
  })
  .get("/borde_12", (req, res) => {
    res.render("bordes/borde_12.html");
  })
  .get("/comision_expertos", (req, res) => {
    res.render("comisiones/comision_expertos.html");
  })
  .get("/comite_admisibilidad", (req, res) => {
    res.render("comisiones/comite_admisibilidad.html");
  })
  .get("/consejo_constitucional", (req, res) => {
    res.render("comisiones/consejo_constitucional.html");
  })
  .get("/en_construccion", (req, res) => {
    res.render("etc/en_construccion.html");
  })
  .get("/apoderados_ingreso", (req, res) => {
    res.render("participantes/apoderados_ingreso.html");
  })
  .get("/jefe_local_ingreso", (req, res) => {
    res.render("participantes/jefe_local_ingreso.html");
  })
  .get("/prueba", (req, res) => {
    res.render("home/prueba.html");
  });

module.exports = router;
