const { Router } = require('express');
const {createStandUp, allStandUp} = require ("../Controllers/StandupsControllers.js")

const router = Router();

router.get("/", allStandUp);
router.post("/create", createStandUp);


module.exports= router;