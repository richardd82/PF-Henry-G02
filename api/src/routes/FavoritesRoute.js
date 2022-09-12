const { Router } = require('express');
const {getFavorites, addFavorites} = require ('../Controllers/FavoritesControllers.js');
const router = Router();

router.get("/:id", getFavorites);
router.post("/create/:idUser/:idClass", addFavorites);

module.exports =  router;