const  service = require('./../services/MovieService');
const movie = require('./../model/Movie');
const e = require("express");

const  getAllMovies = async (req, res, next) => {
    console.log('ok');
    try{
        const movie = await service.getAllMovie();
        if(!movie) throw Error('No Movies');
        await res.status(200).json(movie);
    }catch (e){
        await res.status(400).json({message : e.message})
    }
}

const getMovieById = async (req, res, next) => {
    try{
        const movieId = req.params['movieId'];
        const movie = await service.getMovieById(movieId);
        if(!movie) throw Error('Movie not found with ', movieId);
        await res.status(200).json(movie);
    }catch (err){
        await res.status(400).json({message : err.message});
    }
}

const getMovieByTitle = async (req, res, next) => {
    let movieTitle = req.params['title'];
    try{
        let movie = await service.getMovieByTitle(movieTitle);
        if(!movie) throw Error('Movie Not Found');
        await res.status(200).json(movie);
    }catch (err){
        await res.status(400).json({message : err.message});
    }
}

const saveMovie = async (req, res, next) => {
    try{
        const movie = req.body;
        const newMovie = await service.saveMovie(movie);
        if(!newMovie) throw Error('Failed create new movie');
        await res.status(201).json(newMovie);
    }catch (err){
        await res.status(400).json({message : err.message});
    }
}

const updateMovie = async (req, res, next) => {
    let movieId = req.params['movieId'];
    let movie = req.body;

    try{
        let updateMovie = await service.updateMovieById(movieId, movie);
        if(!updateMovie) throw Error('Movie Update Failed');
        await res.status(200).json(updateMovie);
    }catch (err){
        await res.status(400).json({message : err.message});
    }
}

const deteleMovie = async (req, res, next) => {
    let movieId = req.params['movieId'];
    try{
        let deletedMovie = await service.deleteMovieById(movieId);
        if(!deletedMovie) throw Error('Movie Cannot Deleted');
        await res.status(200).json(deletedMovie);
    }catch (err){
        await res.status(400).json({message : err.message});
    }
}

module.exports = {
    getAllMovies,
    saveMovie,
    getMovieById,
    updateMovie,
    deteleMovie,
    getMovieByTitle
}