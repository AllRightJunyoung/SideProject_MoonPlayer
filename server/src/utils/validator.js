const { body } = require("express-validator");

const title = body("title").trim().isLength({ max: 30 }).withMessage("Input은 30자 이내여야합니다.");
const playerList = body("playerList").isArray().isLength({ min: 1 }).withMessage("재생목록이 존재해야합니다.");

const createUserPlayListValidation = [title, playerList];

module.exports = createUserPlayListValidation;
