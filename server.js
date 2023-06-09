// EXPERTOS : https://www.eldesconcierto.cl/reportajes/2023/01/25/quien-es-quien-en-el-comite-de-expertos-radiografia-de-sus-24-integrantes-definitivos.html
// ADMISIBILIDAD : https://www.biobiochile.cl/noticias/nacional/chile/2023/01/25/8-de-la-u-de-chile-y-3-ligados-a-fundacion-jaime-guzman-los-arbitros-del-nuevo-proceso-constituyente.shtml
// Comision Adminsibilidad  : https://www.tenemosquehablardechile.cl/noticias/estos-son-los-14-integrantes-del-comite-tecnico-de-admisibilidad-que-arbitrara-el-proceso-constitucional
// Consejo    : https://www.emol.com/especiales/2023/nacional/proceso-constitucional/resultados.asp
// sitemap    : https://www.xml-sitemaps.com/

"use strict";

require("dotenv").config();
const app = require("./app");
// const Cors = require("cors");
// const CorsConfig = require("./components/config/CorsConfig");
const { appConfig, dbConfig } = require("./components/config/AppConfig");

console.log(JSON.stringify(appConfig));

async function initApp(appConfig) {
  try {
    // app.use(Cors(CorsConfig));
    app.listen(appConfig.port, () =>
      console.log(`listen on: ${appConfig.port}`)
    );
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
}

initApp(appConfig);

/* For small devices */
// @media screen and (max-width: 320px) {
// }

// @media screen and (min-width: 320px) {
// }

// @media screen and (min-width: 360px) {
// }

// @media screen and (min-width: 480px) {
// }

/* For medium devices */

// @media screen and (min-width: 960px) {
// }

// /* For large devices */
// @media screen and (min-width: 1024px) {
// }

// @media screen and (min-width: 1366px) {
// }

// @media screen and (min-width: 1920px) {
// }
