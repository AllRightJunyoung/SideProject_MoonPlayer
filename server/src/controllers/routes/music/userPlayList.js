const { validationResult, param } = require("express-validator");
const { PlayList, User } = require("../../../models");

const { decodeAccessToken } = require("../../../utils/jwt");

const createUserPlayList = async (req, res, next) => {
  const result = validationResult(req);
  const message = result.array().map((error) => error.msg);

  if (!result.isEmpty()) {
    return res.status(400).send(message[0]);
  }

  const { playerList, title } = req.body;
  let user;
  const access_token = req.headers.authorization.split("Bearer ")[1];
  const { userId } = decodeAccessToken(access_token);

  try {
    user = await User.findOne({ userId });
  } catch (error) {
    return res.status(404).send(error.message);
  }
  if (!user) {
    return res.status(404).send("등록되지 않은 사용자 입니다! ");
  }

  let newPlayList, userPlayList;
  try {
    userPlayList = await PlayList.find({ userId });
    if (!userPlayList.length) {
      newPlayList = new PlayList({
        order: 1,
        playList: playerList,
        userId,
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
        userId,
        title,
      });
    }
    await newPlayList.save();
  } catch (error) {
    return res.status(400).send(error.meessage);
  }
  return res.status(200).json({ result: newPlayList.playList });
};

const getUserPlayList = async (req, res, next) => {
  const access_token = req.headers.authorization.split("Bearer ")[1];

  let userPlayList;
  try {
    const { userId } = decodeAccessToken(access_token);
    userPlayList = await PlayList.find({ userId });
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
const deleteUserPlayList = async (req, res, next) => {
  const { title } = req.params;
  const access_token = req.headers.authorization.split("Bearer ")[1];

  let userInfo;
  try {
    const { userId } = decodeAccessToken(access_token);
    userInfo = await PlayList.find({ userId });
  } catch (error) {
    return res.status(400).send(error.meessage);
  }

  // 플레이리스트 제목 존재하는지 검증
  let userPlayList;
  const isPlayListTitle = userInfo.filter((userInfo) => userInfo.title === title);
  if (isPlayListTitle.length !== 0) {
    try {
      userPlayList = await PlayList.findOneAndDelete({ title });
      return res.status(200).json({
        result: userPlayList.title,
      });
    } catch (error) {
      return res.status(400).send(error.meessage);
    }
  } else {
    return res.status(400).send("존재하지 않는 플레이리스트 제목 입니다.");
  }
};

exports.createUserPlayList = createUserPlayList;
exports.getUserPlayList = getUserPlayList;
exports.deleteUserPlayList = deleteUserPlayList;
