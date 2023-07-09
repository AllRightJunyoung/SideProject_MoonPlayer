const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const HttpError = require("../../models/error");
const User = require("../../models/user");
const PlayList = require("../../models/PlayList");

const { decodeToken } = require("../../utils/jwt");

const getMusicGenre = (req, res, next) => {
  let musicGenreData = fs.readFileSync(path.join(process.cwd(), "src/files/music/music_genre.json"), "utf-8");
  musicGenreData = JSON.parse(musicGenreData);
  res.status(200).json({
    status: "success",
    music: musicGenreData,
  });
};

const getMusicGenreById = (req, res, next) => {
  const genre_id = req.params.genre_id;
  let genreData = fs.readFileSync(path.join(process.cwd(), `src/files/music/${genre_id}.json`), "utf-8");
  genreData = JSON.parse(genreData);
  res.status(200).json({
    status: "success",
    music: genreData,
  });
};

const createPlayList = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("유효하지 않은 Input 입니다", 422));
  }
  const { accessToken, playerList, title } = req.body;
  // Todo , accessToken 기반으로 userID를 가져오고 해당 userID에 PlayList를 저장

  let user;

  const info = decodeToken(accessToken);
  const { userId } = info;

  try {
    user = await User.findOne({ userId });
  } catch (err) {
    return next(error.meessage);
  }

  if (!userId) {
    const error = new HttpError("몽고디비에 등록되지 않은 id 입니다.", 404);
    return next(error);
  }

  let newPlayList;
  try {
    const userPlayList = await PlayList.find({ userId });
    if (!userPlayList.length) {
      newPlayList = new PlayList({
        order: 1,
        playList: playerList,
        userId,
        title,
      });
    } else {
      newPlayList = new PlayList({
        order: userPlayList.length + 1,
        playList: playerList,
        userId,
        title,
      });
    }
    await newPlayList.save();
  } catch (error) {
    return next(error.meessage);
  }
  return res.status(200).send(newPlayList.playList);
};

exports.getMusicGenre = getMusicGenre;
exports.getMusicGenreById = getMusicGenreById;
exports.createPlayList = createPlayList;
