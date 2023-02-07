const mongoose = require("mongoose");

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
