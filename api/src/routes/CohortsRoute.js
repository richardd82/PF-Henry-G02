const { Router } = require('express');
const {createCohorts, getAllCohorts}= require ('../Controllers/CohortsControllers.js')
const router = Router();

router.get("/", getAllCohorts);
router.post("/create", createCohorts);

module.exports= router;