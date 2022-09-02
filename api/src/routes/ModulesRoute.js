const { Router } = require('express');
const {createModules, moduleId} = require('../Controllers/ModulesControllers.js');
const router = Router();

router.get('/', createModules);
router.get('/:id', moduleId);

module.exports= router;