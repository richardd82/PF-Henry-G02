const Router = require('express')
const { createReview, getReview, getReviewByStudent} = require('../Controllers/ReviewControllers')
//const { createReview, getAllReviews } = require('../Controllers/ReviewsControllers')

const router = Router()

router.get('/', getReview)
router.get('/reviewByStudent', getReviewByStudent)
router.post('/create/:taId', createReview)
//router.put('/:userId', updateReview)
/* 
router.get('/:idUser', getAllReviews) */

module.exports = router