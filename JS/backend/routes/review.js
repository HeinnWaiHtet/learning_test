const express = require('express');
const router = express.Router();
const review = require('./../controllers/ReviewController');

router.post('/', review.saveReview);

router.get('/', review.getAllReviews);
router.get('/:reviewId', review.getReviewById);
router.get('/movie/:movieId', review.getReviewByMovieId);

router.put('/:reviewId', review.updateReviewById);

router.delete('/:reviewId', review.deleteReviewById);

module.exports = router;