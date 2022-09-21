const { Users, Videos } = require("../db.js");

const getFavorites = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id, { include: [{ model: Videos }] });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const addFavorites = async (req, res) => {
  const { idUser, idVideos } = req.params;
  try {
    const favorites = await Users.findByPk(idUser);
    await favorites.addVideos(idVideos);
    const user = await Users.findByPk(idUser);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};


module.exports = { getFavorites, addFavorites };
