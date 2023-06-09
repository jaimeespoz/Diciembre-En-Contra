const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  WindowMs: process.env.RATE_LIMIT_PLAZO,
  max: process.env.RATE_LIMIT_NUMERO,
});

module.exports = rateLimiter;
