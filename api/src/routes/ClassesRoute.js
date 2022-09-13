const { Router } = require('express');

const {createClass, classByName, getAllVideos, classById, updateClasses} = require('../Controllers/ClassesController');

const router = Router();
router.get('/', getAllVideos);
router.post('/create', createClass);
router.get('/byName', classByName);
router.get ('/byId/:id', classById);
router.put('/update/:id', updateClasses)
module.exports= router;