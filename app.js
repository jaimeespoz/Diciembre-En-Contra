const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const RateLimiter = require("./components/config/RateLimiter");
// const Cors = require("cors");
// const corsOptions = require("./components/config/CorsOptions");
const credentials = require("./middleware/Credentials");
const { logger } = require("./middleware/logEvents");
const verifyJWT = require("./middleware/VerifyJWT");
const compression = require("compression");
const apiErrorHandler = require("./error/api-error-handler");

const app = express();
app.disable("x-powered-by");

// settings
app
  .set("views", path.join(__dirname, "views"))
  .engine("html", require("ejs").renderFile);

// middlewares
app
  .use(express.json())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(logger)
  .use(RateLimiter)
  .use(credentials)
  //.. .use(Cors(corsOptions))
  .use(compression({ filter: shouldCompress }));

let comun_route = "/contacto";

// routes
app.use("/", require("./routes/home_rutas"));
// app.use("/auth", require("./routes/auth"));
// app.use("/refresh", require("./routes/refresh"));
// app.use("/logout", require("./routes/logout"));

//app.use(verifyJWT);

// static files
app.use(express.static(path.join(__dirname, "components")));

const homeRutas = require("./routes/home_rutas");

app.use("/", homeRutas);

app.use(apiErrorHandler);

app.use((req, res, next) => {
  return res.status(400).json({ message: "No existe esta operacion" });
});

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

module.exports = app;
