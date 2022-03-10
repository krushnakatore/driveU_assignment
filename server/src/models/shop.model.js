const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    shop_name: { type: String, required: true },
    images: { type: Array, required: true },
    location: { type: String, required: true },
    radius: { type: Number, required: true },
    ratings: { type: Number, required: true },
    offerings: { type: Array, required: true },
    online_Payments: { type: String, required: true },
    discounts: { type: Number, required: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("shop", shopSchema);
