// const express = require("express");
// const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtToken = "IamRohitJainJwt";

const fetchuser = (req, res, next) => {
  console.log(req.header);
  try {
    const authtoken = req.header("authtoken");
    const decoded = jwt.verify(authtoken, jwtToken);
    console.log("deco 1:" + decoded.user.id); // bar
    req.user = decoded.user;
    next();
  } catch (err) {
    console.info("wrong auth token!");
    res.status(400).send({ error: "wrong auth token!" });
  }
};

module.exports = fetchuser;
