const express = require("express");

const app = express();

// require modules
const morgan = require("morgan");
const bodyParser = require("body-parser");

// to read .env file
require("dotenv/config");

// require routes
const adminRoute = require("./routes/admin");
const addAdminRoute = require("./routes/addAdmin");
const addUserRoute = require("./routes/addUsers");
const showUsersRoute = require("./routes/showUsers");

// middleware
// loging request on console
app.use(morgan("tiny"));

// encode url to react post method
app.use(bodyParser.json());

//use routes
app.use(adminRoute);
app.use(addAdminRoute);
app.use(showUsersRoute);
app.use(addUserRoute);

// share app into server to cerate server
module.exports = app;
