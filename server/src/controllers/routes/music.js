const path = require('path');
const fs = require('fs')

const getMusicGenre=(req,res,next)=>{
    let musicGenreData = fs.readFileSync(path.join(process.cwd(), "/server/src/files/music/music_genre.json"), 'utf-8')
    musicGenreData=JSON.parse(musicGenreData)
    res.status(200).json(
        {
            status: 'success',
            music: musicGenreData
        }
    )
}

const getMusicGenreById=(req,res,next)=>{
    const genre_id = req.params.genre_id
    let genreData = fs.readFileSync(path.join(process.cwd(), `/server/src/files/music/${genre_id}.json`), 'utf-8')
    genreData = JSON.parse(genreData)
    res.status(200).json(
        {
            status: 'success',
            music: genreData
        }
    )
}

exports.getMusicGenre=getMusicGenre

exports.getMusicGenreById=getMusicGenreById