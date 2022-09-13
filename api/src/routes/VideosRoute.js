const {Router} = require('express')
const { createVideo, allVideos, videoByName, videoByTeacher, videoById } = require('../Controllers/VideosControllers.js')

const router = Router()

router.post('/create', createVideo);
router.get('/', allVideos);
router.get('/byName', videoByName);
router.get('/byTeacher/:userId', videoByTeacher)
router.get('/byId/:id', videoById)

module.exports = router