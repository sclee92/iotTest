const router = require("express").Router();
const soilSensor = require("../models/soilSensor");

router.get("/", (req, res) => {
  soilSensor.find({}, function (err, soilSensor) {
    if (err) throw err;
    res.json(soilSensor);
  });
});

router.post("/insertData", (req, res) => {
  soilSensor
    .create(req.body)
    .then((soilSensor) =>
      res.json({ result: "Success Single Insert soilSensor", data: soilSensor })
    )
    .catch((err) => res.status(500).send(err));
});

router.post("/insertMultipleData", (req, res) => {
  const document = req.body;
  soilSensor
    .insertMany(document)
    .then((soilSensor) =>
      res.json({
        result: "Success Multiple Insert soilSensor",
        data: soilSensor,
      })
    )
    .catch((e) => console.log(e));
});

module.exports = router;
