const app = require("./index");

const connect = require("./configs/db");

app.listen(8888, async (req, res) => {
  await connect();
  console.log("mongo connected!!!");
});
