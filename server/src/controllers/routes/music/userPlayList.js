const { PlayList, User } = require("../../../models");

const { decodeAccessToken } = require("../../../utils/jwt");

const createUserPlayList = async (req, res, next) => {
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

exports.createUserPlayList = createUserPlayList;
exports.getUserPlayList = getUserPlayList;
exports.deleteUserPlayList = deleteUserPlayList;
