const express = require('express');
const router = express.Router();
const movies = require('./../controllers/MovieController');

router.get('/', movies.getAllMovies);
router.get('/:movieId', movies.getMovieById);
router.get('/title/:title', movies.getMovieByTitle);
router.post('/', movies.saveMovie);
router.put('/:movieId', movies.updateMovie);
router.delete('/:movieId', movies.deteleMovie);

module.exports = router;