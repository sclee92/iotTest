const mongoose = require("mongoose");

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *           name: joohee
 *           email: joohee@email.com
 */
const fireSensorSchema = new mongoose.Schema({
  sensor_data: {
    temperature: { type: Number },
    humidity: { type: Number },
    co2: { type: Number },
    tvoc: { type: Number },
    time: { type: Date },
  },
  sensor_area: {
    coordinate: { type: Array },
    type: { type: String },
    boundary: {
      x: { type: Number },
      y: { type: Number },
      angle: { type: Number },
    },
  },
});
module.exports = mongoose.model("fireSensor", fireSensorSchema);
