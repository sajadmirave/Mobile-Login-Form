const mongoose = require("mongoose");

// create scema
const Scema = mongoose.Schema;

const usersScema = new Scema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// create model
const Users = mongoose.model("users", usersScema);

module.exports = Users;
