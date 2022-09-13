const {Router} = require('express')
const { present } = require("../Controllers/MeetsControllers.JS")

const router = Router()

router.post('/create', present)

module.exports = router