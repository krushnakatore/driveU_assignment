const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const shopController = require("./controllers/shop.controller");

app.use("/shop", shopController);

module.exports = app;
