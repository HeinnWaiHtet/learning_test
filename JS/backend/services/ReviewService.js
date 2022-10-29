const Review = require('./../model/Review');
const mongoose = require('mongoose');
const Movie = require('./../model/Movie');
const {mongo} = require("mongoose");

// Save Review
const saveReview = async (review) => {
    const newReview = new Review({
        movie : mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review,
    });

    console.log('new Reivew', newReview);
    await newReview.save();
    return newReview.populate('movie');
}

// Get Review
const getAllReviews = async () => Review.find().populate('movie');

const getReviewById = async (reviewId) => Review.findById(reviewId).populate('movie');

const getReviewByMovieId = async (movieId) => Review.find({movie : movieId}).populate('movie');

// Update Review
const updateReviewById = async (reviewId, review) => {
    const movie = mongoose.Types.ObjectId(review.movie);
    const updatedReview = await Review.findByIdAndUpdate(reviewId, review, {new : true});
    return updatedReview.populate('movie');
}

// Delete Review
const deleteReviewById = async (reviewId) => await Review.findByIdAndDelete(reviewId);

module.exports = {
    saveReview,
    getAllReviews,
    getReviewById,
    getReviewByMovieId,
    updateReviewById,
    deleteReviewById
}