const PORT = require("./constants/index");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express Service with Swagger",
      version: "1.0.0",
      description: "a Rest api using swagger and express.",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./router/*.js", "./models/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
