const { validationResult, param } = require("express-validator");
const { PlayList, User } = require("../../models");

const { decodeToken } = require("../../utils/jwt");

const createMyPlayList = async (req, res, next) => {
  const result = validationResult(req);
  const message = result.array().map((error) => error.msg);

  if (!result.isEmpty()) {
    return res.status(422).send(message[0]);
  }
  const { accessToken, playerList, title } = req.body;

  let user;

  const info = decodeToken(accessToken);
  const { userKey } = info;

  try {
    user = await User.findOne({ userKey });
  } catch (error) {
    return res.status(404).send(error.message);
  }
  if (!user) {
    return res.status(404).send("등록되지 않은 사용자 입니다! ");
  }

  let newPlayList;
  let userPlayList;
  try {
    userPlayList = await PlayList.find({ userKey });
    if (!userPlayList.length) {
      newPlayList = new PlayList({
        order: 1,
        playList: playerList,
        userKey,
        title,
      });
    } else {
      const isPlayList = userPlayList.filter((playList) => playList.title === title);
      if (isPlayList.length !== 0) {
        return res.status(400).send("중복된 플레이리스트 이름 입니다!");
      }
      newPlayList = new PlayList({
        order: userPlayList.length + 1,
        playList: playerList,
        userKey,
        title,
      });
    }
    await newPlayList.save();
  } catch (error) {
    return res.status(400).send(error.meessage);
  }
  return res.status(200).json({ result: newPlayList.playList });
};

const getMyPlayListNameList = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send("유효하지 않은 Input 입니다.");
  }
  const { accessToken } = req.body;
  const info = decodeToken(accessToken);
  const { userKey } = info;

  let userPlayList;
  try {
    userPlayList = await PlayList.find({ userKey });
  } catch (error) {
    return res.status(400).send(error.meessage);
  }
  const newUserPlayList = userPlayList.map((playList, idx) => {
    return {
      order: idx + 1,
      playList: playList.playList,
      title: playList.title,
    };
  });
  return res.status(200).json({
    result: newUserPlayList,
  });
};
const deleteMyPlayList = async (req, res, next) => {
  const { title } = req.params;

  let userPlayList;
  try {
    userPlayList = await PlayList.findOneAndDelete({ title });
  } catch (error) {
    return res.status(400).send(error.meessage);
  }
  return res.status(200).json({
    result: userPlayList.title,
  });
};

exports.createMyPlayList = createMyPlayList;
exports.getMyPlayListNameList = getMyPlayListNameList;
exports.deleteMyPlayList = deleteMyPlayList;
