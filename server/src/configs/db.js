const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://krushnakatore:krushnakatore@kkclustor.ydc0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/shop"
  );
};
