const jwt = require("jsonwebtoken");

const createToken = (user) => {
  let token;

  try {
    token = jwt.sign(
      {
        userKey: user.userKey,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  } catch (error) {
    return next(error);
  }
  return token;
};
const decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

exports.createToken = createToken;
exports.decodeToken = decodeToken;
