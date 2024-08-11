const express = require("express");
const router = express.Router();
const User = require("../pojo/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const jwtToken = "IamRohitJainJwt";
// define the home page route
router.get("/find/email/:email", async (req, res) => {
  console.log(req.params.email);
  let dbUser = await User.findOne({ email: req.params.email });

  console.log("dbUser: " + dbUser);
  if (!dbUser) {
    return res.status(404).json({ error: "Email not found" });
  }
  return res.json({ user: dbUser });
});

// create user
router.post("/create", async (req, res) => {
  console.log(req.body);
  let dbUser = await User.findOne({ email: req.body.email });
  console.log("dbUser: " + dbUser);
  if (dbUser) {
    return res.status(400).json({ error: "please enter unique email" });
  }

  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(req.body.password, salt);
  console.log("create hash" + hash);

  dbUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hash,
  });

  const data = {
    user: {
      id: dbUser.id,
    },
  };
  const authToken = jwt.sign(data, jwtToken);
  return res.json({ authToken });
});

// create user
router.post("/login", async (req, res, next) => {
  console.log(req.body);
  // const userS = user(req.body);
  // userS.save();

  let dbUser = await User.findOne({ email: req.body.email });
  console.log("dbUser: " + dbUser);
  if (!dbUser) {
    return res.status(404).json({ error: "Invalid User details!" });
  }
  const result = await bcrypt.compare(req.body.password, dbUser.password);
  if (!result) {
    return res.status(404).json({ error: "Invalid User details!" });
  }

  const data = {
    user: {
      id: dbUser.id,
    },
  };
  const authToken = jwt.sign(data, jwtToken);
  return res.json({ authToken });
});

// define the home page route
router.post("/getuser", fetchuser, async (req, res) => {
  const dbUser = await User.findById(req.user.id);
  console.log("dbUser: " + dbUser);
  if (!dbUser) {
    return res.status(404).json({ error: "Email not found" });
  }
  return res.json({ user: dbUser });
});

module.exports = router;
