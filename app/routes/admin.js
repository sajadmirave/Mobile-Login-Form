const express = require("express");

//use router to use routes system in project
const router = express.Router();

//defualt url for api
const api_url = process.env.BASE_URL;

//controler
const adminControles = require("../controlers/adminControler");

router.get(`${api_url}/admins`, adminControles.showAdmin);

module.exports = router;
