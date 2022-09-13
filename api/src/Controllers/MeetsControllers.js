 const {Meets} = require("../db.js")

const present = async (req, res, next) => {
    const {date, attendance, standupId, userId, classId} = req.body
    try {
        const userPresent = await Meets.create({
            date,
            attendance, 
            standupId
        })
        await userPresent.addUsers(userId)
        await userPresent.addClasses(classId)
        res.json(userPresent)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    present
} 