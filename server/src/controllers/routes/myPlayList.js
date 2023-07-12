const { validationResult } = require("express-validator");
const { PlayList, User, HttpError } = require("../../models");

const { decodeToken } = require("../../utils/jwt");

const createMyPlayList = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("유효하지 않은 Input 입니다", 422));
  }
  const { accessToken, playerList, title } = req.body;

  let user;

  const info = decodeToken(accessToken);
  const { userKey } = info;

  try {
    user = await User.findOne({ userKey });
  } catch (err) {
    return next(error.meessage);
  }

  if (!userKey) {
    const error = new HttpError("DB에 등록되지 않은 사용자 Key 입니다.", 404);
    return next(error);
  }

  let newPlayList;
  try {
    const userPlayList = await PlayList.find({ userKey });
    if (!userPlayList.length) {
      newPlayList = new PlayList({
        order: 1,
        playList: playerList,
        userKey,
        title,
      });
    } else {
      newPlayList = new PlayList({
        order: userPlayList.length + 1,
        playList: playerList,
        userKey,
        title,
      });
    }
    await newPlayList.save();
  } catch (error) {
    return next(error.meessage);
  }
  return res.status(200).json({ result: newPlayList.playList });
};

const getMyPlayListNameList = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("유효하지 않은 Input 입니다", 422));
  }
  const { accessToken } = req.body;
  console.log(accessToken);
};

exports.createMyPlayList = createMyPlayList;
exports.getMyPlayListNameList = getMyPlayListNameList;
