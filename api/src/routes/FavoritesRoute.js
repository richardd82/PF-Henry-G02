const { Router } = require('express');
const {getFavorites, addFavorites} = require ('../Controllers/FavoritesControllers.js');
const router = Router();

router.get("/:id", getFavorites);
router.post("/create/:idUser/:idVideos", addFavorites);

module.exports =  router;