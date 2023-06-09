const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/home.html");
});

router.get("/login", (req, res) => {
  res.render("login/login.html");
});

router.get("/registrarse", (req, res) => {
  res.render("login/registrarse.html");
});

router.get("/contacto", (req, res) => {
  res.render("contacto/contacto.html");
});

router.get("/ppal", (req, res) => {
  res.render("ppal/ppal.html");
});

router.get("/inicial", (req, res) => {
  res.render("inicial/inicial.html");
});

router.get("/profile", (req, res) => {
  res.render("ppal/profile.html");
});

router.get("/privacidad", (req, res) => {
  res.render("terminos_condiciones/privacidad.html");
});

router.get("/privacidad_confidencialidad", (req, res) => {
  res.render("terminos_condiciones/privacidad_confidencialidad.html");
});

router.get("/privacidad_privacidad", (req, res) => {
  res.render("terminos_condiciones/privacidad_privacidad.html");
});

router.get("/seguridad_introduccion", (req, res) => {
  res.render("terminos_condiciones/seguridad_introduccion.html");
});

router.get("/seguridad_clave", (req, res) => {
  res.render("terminos_condiciones/seguridad_clave.html");
});

router.get("/seguridad_compromiso", (req, res) => {
  res.render("terminos_condiciones/seguridad_compromiso.html");
});

router.get("/seguridad_resguardo", (req, res) => {
  res.render("terminos_condiciones/seguridad_resguardo.html");
});

router.get("/terminos_uso", (req, res) => {
  res.render("terminos_condiciones/terminos_uso.html");
});

router.get("/terminos_aceptacion_terminos", (req, res) => {
  res.render("terminos_condiciones/terminos_aceptacion_terminos.html");
});

router.get("/terminos_codigo_conducta", (req, res) => {
  res.render("terminos_condiciones/terminos_codigo_conducta.html");
});

router.get("/terminos_contratacion_servicios", (req, res) => {
  res.render("terminos_condiciones/terminos_contratacion_servicios.html");
});

router.get("/terminos_derecho_monitoreo", (req, res) => {
  res.render("terminos_condiciones/terminos_derecho_monitoreo.html");
});

router.get("/terminos_derechos_propiedad", (req, res) => {
  res.render("terminos_condiciones/terminos_derechos_propiedad.html");
});

router.get("/terminos_foros_publicos", (req, res) => {
  res.render("terminos_condiciones/terminos_foros_publicos.html");
});

router.get("/terminos_informacion_privada", (req, res) => {
  res.render("terminos_condiciones/terminos_informacion_privada.html");
});

router.get("/terminos_legislacion_aplicable", (req, res) => {
  res.render("terminos_condiciones/terminos_legislacion_aplicable.html");
});

router.get("/terminos_licencia_limitada", (req, res) => {
  res.render("terminos_condiciones/terminos_licencia_limitada.html");
});

router.get("/terminos_limitacion_responsabilidad", (req, res) => {
  res.render("terminos_condiciones/terminos_limitacion_responsabilidad.html");
});

router.get("/terminos_marcas_comerciales", (req, res) => {
  res.render("terminos_condiciones/terminos_marcas_comerciales.html");
});

router.get("/terminos_modificaciones_sitio", (req, res) => {
  res.render("terminos_condiciones/terminos_modificaciones_sitio.html");
});

router.get("/terminos_obligaciones_usuarios", (req, res) => {
  res.render("terminos_condiciones/terminos_obligaciones_usuarios.html");
});

router.get("/terminos_politica_ideas", (req, res) => {
  res.render("terminos_condiciones/terminos_politica_ideas.html");
});

router.get("/terminos_prohibicion_uso", (req, res) => {
  res.render("terminos_condiciones/terminos_prohibicion_uso.html");
});

router.get("/terminos_propiedad_industrial", (req, res) => {
  res.render("terminos_condiciones/terminos_propiedad_industrial.html");
});

router.get("/terminos_renuncia_garantia", (req, res) => {
  res.render("terminos_condiciones/terminos_renuncia_garantia.html");
});

router.get("/terminos_responsabilidad_portal", (req, res) => {
  res.render("terminos_condiciones/terminos_responsabilidad_portal.html");
});

router.get("/terminos_terminos", (req, res) => {
  res.render("terminos_condiciones/terminos_terminos.html");
});

router.get("/terminos_vinculos_sitios", (req, res) => {
  res.render("terminos_condiciones/terminos_vinculos_sitios.html");
});

module.exports = router;
