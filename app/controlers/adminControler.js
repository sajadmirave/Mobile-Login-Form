//admin model
const Admin = require("../model/admin");

exports.showAdmin = showAdmin = async (req, res) => {
  // showing data
  const adminData = await Admin.find().exec();

  res.send(adminData);
};

exports.addAdmin = addAdmin = async (req, res) => {
  const { username, password } = req.body;

  //   add data
  let newAdmin = new Admin({
    // first arg is username scema
    // second arg is sending data from url
    username: username,
    password: password,
  });

  //save data
  await newAdmin.save();

  //   success message and status
  res.status(201).json({
    status: 201,
    message: "data created...",
  });
};
