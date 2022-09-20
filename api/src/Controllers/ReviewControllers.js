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
/* 
         let ta = await Users.findOne({
            where: {
                id: taId
            }
         })  */
         const users = await Users.findByPk(user)

         const usuario = []
        usuario.push(users)

         if(!usuario.length) {
            const newReview = await Reviews.create({
                    
                taId: taId,
                user: user,
                 rating: rating,
                 comments: comments
             })
             await newReview.setUser(user)
            return res.json(newReview)
            
            } else {
                return res.status(400).json({msg: 'el usuario ya tiene una review'})
         }
        //}
    //} 
    } catch (error) {
        next(error)
    }
}


//REVISAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARRR


module.exports = {
    getReview,
    getReviewByStudent,
    createReview,

}