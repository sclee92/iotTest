const mongoose = require("mongoose");

const soilSensorSchema = new mongoose.Schema({
  sensor_data: {
    soil_temperature: { type: Number },
    soil_humidity: { type: Number },
    soil_temperature_aux: { type: Number },
    soil_humidity_aux: { type: Number },
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

module.exports = mongoose.model("soilSensor", soilSensorSchema);
