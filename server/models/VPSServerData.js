const mongoose = require("mongoose");

const VPSServerDataSchema = mongoose.Schema({
  vpsName: {
    type: String,
    required: true,
  },
  cpuUsage: {
    type: Number,
    required: true,
  },
  memoryUsage: {
    type: Number,
    required: true,
  },
  storageUsage: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("VPSServerData", VPSServerDataSchema);
