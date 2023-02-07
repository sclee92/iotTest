const router = require("express").Router();
const inclSensor = require("../models/inclSensor");

router.get("/", (req, res) => {
  inclSensor.find({}, function (err, inclSensor) {
    if (err) throw err;
    res.json(inclSensor);
  });
});

router.post("/insertData", (req, res) => {
  inclSensor
    .create(req.body)
    .then((inclSensor) =>
      res.json({ result: "Success Single Insert inclSensor", data: inclSensor })
    )
    .catch((err) => res.status(500).send(err));
});

router.post("/insertMultipleData", (req, res) => {
  const document = req.body;
  inclSensor
    .insertMany(document)
    .then((inclSensor) =>
      res.json({
        result: "Success Multiple Insert inclSensor",
        data: inclSensor,
      })
    )
    .catch((e) => console.log(e));
});

module.exports = router;
