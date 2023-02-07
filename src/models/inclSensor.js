const mongoose = require("mongoose");

const inclSensorSchema = new mongoose.Schema({
  sensor_data: {
    incl_x: { type: Number },
    incl_y: { type: Number },
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

module.exports = mongoose.model("inclSensor", inclSensorSchema);
