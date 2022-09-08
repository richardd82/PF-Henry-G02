const {Router} = require('express')
const { createVideo, allVideos, videoByName, videoByTeacher } = require('../Controllers/VideosControllers.js')

const router = Router()

router.post('/create', createVideo);
router.get('/', allVideos);
router.get('/byName', videoByName);
router.get('/:userId', videoByTeacher)

module.exports = router