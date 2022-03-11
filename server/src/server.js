const app = require("./index");

const connect = require("./configs/db");

const port = process.env.PORT || 8888;

app.listen(port, async (req, res) => {
  await connect();
  console.log("mongo connected!!!");
});
