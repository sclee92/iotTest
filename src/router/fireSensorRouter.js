const router = require("express").Router();
const fireSensor = require("../src/models/fireSensor");

router.get("/", (req, res) => {
  fireSensor.find({}, function (err, FireSensor) {
    if (err) throw err;
    res.json(FireSensor);
  });
});

router.post("/insertData", (req, res) => {
  fireSensor
    .create(req.body)
    .then((fireSensor) =>
      res.json({ result: "Success Single Insert fireSensor", data: fireSensor })
    )
    .catch((err) => res.status(500).send(err));
});

router.post("/insertMultipleData", (req, res) => {
  const document = req.body;
  fireSensor
    .insertMany(document)
    .then((fireSensor) =>
      res.json({
        result: "Success Multiple Insert fireSensor",
        data: fireSensor,
      })
    )
    .catch((e) => console.log(e));
});

module.exports = router;
