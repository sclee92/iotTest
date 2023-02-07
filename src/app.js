import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(cors());
app.use(express.static("public"));
const port = 8090;
const specs = swaggerJsdoc(swaggerOptions);
app.use(
  routes.swagger,
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://keti:!keti!@15.165.205.212:58010/keti")
  .then(() => console.log("Successfully Connected MongoDB"))
  .catch((e) => console.error(e));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server Connected Success");
});

app.use("/fireSensor", require("./router/fireSensorRouter"));
app.use("/soilSensor", require("./router/soilSensorRouter"));
app.use("/inclSensor", require("./router/inclSensorRouter"));
app.listen(port, () => {
  console.log("###########################################");
  console.log(`#### Example app listening on port ${port} ####`);
  console.log("###########################################");
});
