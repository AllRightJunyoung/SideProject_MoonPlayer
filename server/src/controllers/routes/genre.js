const path = require("path");
const fs = require("fs");

const getGenreMusic = (req, res, next) => {
  let musicGenreData = fs.readFileSync(path.join(process.cwd(), "src/files/music/music_genre.json"), "utf-8");
  musicGenreData = JSON.parse(musicGenreData);
  res.status(200).json({
    status: "success",
    result: musicGenreData,
  });
};

const getGenreMusicById = (req, res, next) => {
  const genre_id = req.params.genre_id;
  let genreData = fs.readFileSync(path.join(process.cwd(), `src/files/music/${genre_id}.json`), "utf-8");
  genreData = JSON.parse(genreData);
  res.status(200).json({
    status: "success",
    result: genreData,
  });
};
exports.getGenreMusic = getGenreMusic;
exports.getMusicGenreById = getGenreMusicById;
