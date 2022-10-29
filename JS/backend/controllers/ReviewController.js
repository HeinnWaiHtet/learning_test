const service = require('./../services/ReviewService');

const saveReview = async (req, res, next) => {
    const body = req.body;
    try{
        console.log('bod', body);
        const review = await service.saveReview(body);
        if(!review) throw Error('Review cannot add');
        await res.status(200).json(review);
    }catch (err){
        await res.status(400).json({message : res.message});
    }
}

const getAllReviews = async (req, res, next) => {
    try{
        const reviews = await service.getAllReviews();
        if(!reviews) throw Error('Not Found Revies');
        await res.status(200).json(reviews);
    }catch (err){
        await res.status(400).status({message : err.message});
    }
}

const getReviewById = async (req, res, next) => {
    const reviewId = req.params['reviewId'];
    try{
        const review = await service.getReviewById(reviewId);
        if(!review) throw Error('Review Not Found');
        await res.status(200).json({message : review});
    }catch (err){
        await res.status(400).json({message : res.message});
    }
}

const getReviewByMovieId = async (req, res, next) => {
    const movieId = req.params['movieId'];
    try{
        const review = await service.getReviewByMovieId(movieId);
        if(!review) throw Error("Review Not Found");
        await res.status(200).json(review);
    }catch (err){
        await res.status(400).json({message : res.message});
    }
}

const updateReviewById = async (req, res, next) => {
    const reviewId = req.params['reviewId'];
    const review = req.body;
    try {
        const updatedReview = await service.updateReviewById(reviewId, review);
        if(!updatedReview) throw Error('Review Cannot Update');
        return await res.status(200).json(updatedReview);
    }catch (err){
        await res.status(400).json({message : res.message});
    }
}

const deleteReviewById = async (req, res, next) => {
    const reviewId = req.params['reviewId'];
    try {
        console.log('reviewId', reviewId);
        const review = await service.deleteReviewById(reviewId);
        console.log('delete review', review);
        if(!review) throw Error('Review Cannot Delete');
        return await res.status(200).json(review);
    }catch (err){
        await res.status(400).json({message : res.message});
    }
}

module.exports = {
    getAllReviews,
    getReviewById,
    getReviewByMovieId,
    saveReview,
    updateReviewById,
    deleteReviewById
}