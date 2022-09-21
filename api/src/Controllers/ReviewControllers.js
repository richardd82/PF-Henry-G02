const { Reviews, Users } = require("../db.js");

const getReview = async(req, res, next) =>{
    //const {taId} = req.query
    try {
        const allReviews = await Reviews.findAll({include: Users})
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
            include:{model: Users}
        })
        res.json(student)
    } catch (error) {
        next(error)
    }
}
const createReview = async(req, res, next) => {
    const {user }= req.params
    const {rating, comments, taId} = req.body
    try {

         let ta = await Users.findOne({
            where: {
                id: taId
            }
         }) 
/*          if (ta) {
            const userRev = await Users.findAll({
                where: {
                    id: user
                }
            }) 
            if(userRev){*/
            const newReview = await Reviews.create({
                
                    taId: taId,
                    user: user,
                    rating: rating,
                    comments: comments
                })
                await newReview.setUser(user)
                res.json(newReview)
        //}
    //} 
    } catch (error) {
        next(error)
    }
}





module.exports = {
    getReview,
    getReviewByStudent,
    createReview,

}