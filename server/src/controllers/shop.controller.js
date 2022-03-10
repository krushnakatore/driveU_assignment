const express = require("express");

const Shop = require("../models/shop.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const shop = await Shop.create(req.body);

    return res.status(200).send(shop);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const shop = await Shop.find().lean().exec();

    return res.status(200).send(shop);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

//by ratings

router.get("/rate", async (req, res) => {
  try {
    const shop = await Shop.find().sort({ ratings: -1 });

    return res.status(200).send(shop);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

//by discount

router.get("/discount", async (req, res) => {
  try {
    const shop = await Shop.find().sort({ discounts: 1 });

    return res.status(200).send(shop);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

//onlinePayment

router.get("/online", async (req, res) => {
  try {
    const shop = await Shop.find({ online_Payments: true });
    return res.status(200).send(shop);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

//radius

router.get("/radius", async (req, res) => {
  try {
    const shop = await Shop.find().lean().exec({ radius: -1 });

    return res.status(200).send(shop);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
