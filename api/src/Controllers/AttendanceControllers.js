const { Attendance } = require('../db');


const createAttendance = async(req, res, next) => {
    const {attendance, usersId, cohortId, classId, standupId} = req.body
    try {
        const user = await Attendance.create({attendance, usersId, cohortId, classId, standupId})
        res.json(user)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createAttendance
}