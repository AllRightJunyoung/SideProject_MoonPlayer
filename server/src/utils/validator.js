const { body, param } = require("express-validator");

const titleValidation = body("title").trim().isLength({ max: 30 }).withMessage("Input은 30자 이내여야합니다.");
const playerListValidation = body("playerList")
  .isArray()
  .isLength({ min: 1 })
  .withMessage("재생목록이 존재해야합니다.");
const accessTokenValidation = body("accessToken").trim().isString().withMessage("액세스 토큰이 존재하지 않습니다.");

const createMyPlayListValidation = [titleValidation, playerListValidation, accessTokenValidation];

module.exports = createMyPlayListValidation;
module.exports = accessTokenValidation;
