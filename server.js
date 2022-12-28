const app = require("./app/app");

//mongoose to use mongodb in express
const mongoose = require("mongoose");

//port of server
// read from .env file
const PORT = process.env.PORT;

// connect into database
mongoose
  .connect("mongodb://127.0.0.1:27017/LoginForm_Backend")
  .then(() => {
    console.log("database connected...");
    //create server
    app.listen(PORT, () =>
      console.log(`server is running on http://192.168.1.104:${PORT}`)
    );
  })
  .catch((err) => {
    console.log("error :(");
    console.log(err);
  });
