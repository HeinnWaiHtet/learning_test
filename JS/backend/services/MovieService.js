const Movie = require('./../model/Movie');

const getAllMovie = async () => Movie.find();

const getMovieById = async (movieId) => Movie.findById(movieId);

const getMovieByTitle = async (movieTitle) => {
    let movie = await Movie.find({
        title : {
            $regex:movieTitle
        }
    });
    return movie;
}

const saveMovie = async (movie) => {
    const newMovie = new Movie(movie);
    return newMovie.save();
}

const updateMovieById = async (movieId, movie) => Movie.findByIdAndUpdate(movieId, movie);

const deleteMovieById = async (movieId) => Movie.findByIdAndDelete(movieId);

module.exports = {
    getAllMovie,
    saveMovie,
    getMovieById,
    updateMovieById,
    deleteMovieById,
    getMovieByTitle
}