const {Router} = require('express')
const { createAttendance } = require('../Controllers/AttendanceControllers')

const router = Router()

router.post('/create', createAttendance)

module.exports = router