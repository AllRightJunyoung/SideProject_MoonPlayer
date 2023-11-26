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
  let { size, page } = req.query;

  let genreData = fs.readFileSync(path.join(process.cwd(), `src/files/music/${genre_id}.json`), "utf-8");
  genreData = JSON.parse(genreData);

  size = Number(size); // 사용자가 요청한 size 양
  page = Number(page); //사용자의 현재 page
  const totalCount = genreData.music_list.length;
  const totalPage = Math.round(totalCount / size);

  const music_list = genreData.music_list.slice(page * size, (page + 1) * size);

  res.status(200).json({
    result: {
      status: "success",
      genre_title: genreData.genre_title,
      genre_id: genreData.genre_id,
      music_list,
      page,
      size,
      totalPage,
      isLastPage: totalPage <= page,
      isFirstPage: page === 0,
    },
  });
};

exports.getGenreMusic = getGenreMusic;
exports.getMusicGenreById = getGenreMusicById;
