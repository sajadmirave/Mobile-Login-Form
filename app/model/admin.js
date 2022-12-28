const mongoose = require("mongoose");

/*
first create Scema for mongodb
scema is data structer for database
*/
const Scema = mongoose.Schema;

const adminScema = new Scema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/*
create model
model = collection in mongodb
first arg is name of model(collection)
second is model Scema
*/
const Admin = mongoose.model("admin", adminScema);

// share Admin Model
module.exports = Admin;
