const express = require('express');
const router = express.Router();

const{getMovie,postMovie,putMovie,deleteMovie,getMovieById} = require('../controllers/movie.controllers');


router.get('/', getMovie);
router.get('/id/:id',getMovieById);
router.post('/',postMovie);
router.put('/:id',putMovie);
router.delete('/:id',deleteMovie);

module.exports= router;