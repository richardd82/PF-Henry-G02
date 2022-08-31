const { Router } = require('express');

const {createClass, classByName, getAllVideos} = require('../Controllers/ClassesController');

const router = Router();
router.get('/', getAllVideos);
router.post('/create', createClass);
router.get('/byName', classByName);
module.exports= router;