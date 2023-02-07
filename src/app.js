const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const sensorRouter = require("./router");

const PORT = require("./constants/index");

const app = express();
app.use(cors());
app.use(express.static("public"));

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

app.use("/", sensorRouter);

const { swaggerUi, specs } = require("./swagger");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.listen(PORT, () => {
  console.log("###########################################");
  console.log(`#### Example app listening on port ${PORT} ####`);
  console.log("###########################################");
});
