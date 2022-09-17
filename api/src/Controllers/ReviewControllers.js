const { Reviews, Users } = require("../db.js");

const getReview = async(req, res, next) =>{
    const {taId} = req.query
    try {
        const allReviews = await Reviews.findAll({
            where: {
                taId: taId
            }
        })
        res.json(allReviews)
    } catch (error) {
        next(error)
    }
}
const getReviewByStudent = async (req, res, next)=>{
    const {userId} = req.query
    try {
        const student = await Users.findOne({
            where: {
                id: userId
            }, 
            include:{model: Reviews}
        })
        res.json(student)
    } catch (error) {
        next(error)
    }
}
   /*  const {taId }= req.query
    try {
        const ta = await Users.findOne({               //me traigo toda la info del TA
            where: {
                id: taId
            }
        })
        const reviewForTA = await Reviews.findAll({    // me traigo todas las puntuaciones que coinciden con ese TA
            where: {
                taId: ta
    }})
        const studentReviewed = await Users.findOne({  //me traigo al estudiante puntuado
            where: {
                id: reviewForTA.map(el => el.userId)
            }
        })
         const result = reviewForTA.map(review => {
            review.rating = studentReviewed.find(student => student.id === review.userId)
        }) 
        res.json(result) 

    } catch (error) {
        next(error)
    } */
const createReview = async(req, res, next) => {
    const {user }= req.params
    const {rating, comments, taId} = req.body
    try {

         let ta = await Users.findOne({
            where: {
                id: taId
            }
         }) 
         if (ta) {
            const userRev = await Users.findAll({
                where: {
                    id: user
                }
            })
            if(userRev){
            const newReview = await Reviews.create({
                
                    taId: taId,
                    user: user,
                    rating: rating,
                    comments: comments
                })
                await newReview.addUsers(userRev)
                res.json(newReview)
        }
    } 
    } catch (error) {
        next(error)
    }
}





module.exports = {
    getReview,
    getReviewByStudent,
    createReview,

}