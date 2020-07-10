const express = require("express");
const router = express.Router();
const VPSServerData = require("../models/VPSServerData");
const { json } = require("express");

router.get("/", async (req, res) => {
  try {
    let now = new Date();
    const vpsData = await VPSServerData.find({
      year: parseInt(now.getFullYear()),
      month: parseInt(now.getMonth() + 1),
      date: parseInt(now.getDate()),
    });
    res.json(vpsData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const vpsData = new VPSServerData({
      vpsName: req.body.vpsName,
      cpuUsage: req.body.cpuUsage,
      memoryUsage: req.body.memoryUsage,
      storageUsage: req.body.storageUsage,
      year: req.body.year,
      month: req.body.month,
      date: req.body.date,
    });

    let savedVPSData = await vpsData.save();
    res.sendStatus(201);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
