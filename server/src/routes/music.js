const express=require('express')
const router = express.Router();
const musicControllers=require('../controllers/music')




router.get('/genre',musicControllers.getMusicGenre)
router.get('/genre/:genre_id',musicControllers.getMusicGenreById)


module.exports=router