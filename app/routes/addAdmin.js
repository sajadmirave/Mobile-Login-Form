const express = require("express");

//use router to use routes system in project
const router = express.Router();

//controlers
const adminControler = require("../controlers/adminControler");

//defualt url for api
const api_url = process.env.BASE_URL;

router.post(`${api_url}/admins`, adminControler.addAdmin);

module.exports = router;
