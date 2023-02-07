const router = require("express").Router();
const fireSensor = require("../models/fireSensor");

/**
 * @swagger
 * paths:
 *  /fireSensor:
 *    get:
 *      summary: "유저 데이터 전체조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: 전체 유저 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    users:
 *                      type: object
 *                      example:
 *                          [
 *                            { "id": 1, "name": "유저1" },
 *                            { "id": 2, "name": "유저2" },
 *                            { "id": 3, "name": "유저3" },
 *                          ]
 */
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
