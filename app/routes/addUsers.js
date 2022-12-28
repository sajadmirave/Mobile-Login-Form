const express = require("express");

// to use routes system in project
const router = express.Router();

// model
const Users = require("../model/users");

// defualt url for api
const base_url = process.env.BASE_URL;

router.post(`${base_url}/users`, async (req, res) => {
  // get from url
  const { username, password } = req.body;

  //add data
  let addUser = new Users({
    username: username,
    password: password,
  });

  //   save data
  await addUser.save();

  res.status(201).json({
    status: 201,
    message: "data created...",
  });
});

module.exports = router;
