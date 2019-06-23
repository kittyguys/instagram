const jwt = require("jsonwebtoken");
const config = require("config");

// const secret = config.get("Instagram.secret");

const checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  console.log("token", token);
  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
};

module.exports = {
  checkToken: checkToken
};
