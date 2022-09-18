const {Router} = require('express')
const { createAttendance, getAttendances } = require('../Controllers/AttendanceControllers')

const router = Router()

router.get('/', getAttendances)
router.post('/create', createAttendance)

module.exports = router