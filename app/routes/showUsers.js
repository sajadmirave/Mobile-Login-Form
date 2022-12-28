const express = require("express");

const router = express.Router();

const Users = require("../model/users");

const base_url = process.env.BASE_URL;

router.get(`${base_url}/users`, async (req, res) => {
  const usersList = await Users.find().exec();
  res.send(usersList);
});

module.exports = router;
