const {Router} = require('express')
const { createAttendance, getAllAttendance, getAttendances } = require('../Controllers/AttendanceControllers')

const router = Router()

router.get('/', getAttendances)
router.get('/get', getAllAttendance)
router.post('/create', createAttendance)

module.exports = router