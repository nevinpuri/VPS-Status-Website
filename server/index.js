const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());

const vpsDataRoute = require("./routes/vpsData");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/statusAPI", vpsDataRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected");
  }
);

app.listen(4823);
