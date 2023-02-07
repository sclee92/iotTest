const router = require("express").Router();
const fireRouter = require("./fireSensorRouter");
const soilRouter = require("./soilSensorRouter");
const inclRouter = require("./inclSensorRouter");

/**
 * @swagger
 * tags:
 *  name: fireSensor
 *  description: 화제 선제
 */
router.use("/fireSensor", fireRouter);

/**
 * @swagger
 * tags:
 *  name: soilRouter
 *  description: 화제 선제
 */
router.use("/soilSensor", soilRouter);

/**
 * @swagger
 * tags:
 *  name: inclRouter
 *  description: 화제 선제
 */
router.use("/inclSensor", inclRouter);

module.exports = router;
