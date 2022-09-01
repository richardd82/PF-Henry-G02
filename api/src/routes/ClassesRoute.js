const { Router } = require('express');

const {createClass, classByName, getAllVideos, classById} = require('../Controllers/ClassesController');

const router = Router();
router.get('/', getAllVideos);
router.post('/create', createClass);
router.get('/byName', classByName);
router.get ('/byId/:id', classById);
module.exports= router;