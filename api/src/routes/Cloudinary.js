const { Router } = require('express');
const {uploadImage}= require ('../Controllers/CloudinaryController.js')
const router = Router();

router.post("/upload", uploadImage);

module.exports= router;