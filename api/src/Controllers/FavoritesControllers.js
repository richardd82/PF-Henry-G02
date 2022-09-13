const {Users, Classes} = require("../db.js");

const getFavorites = async(req, res, next)=>{
    const {id} = req.params;
    try {
        const user = await Users.findByPk(id,{  include: [{model:Classes}] });
        
        res.json(user);
    } catch (error) {
        console.log(error)
    }
};

const addFavorites = async (req,res) =>{
    const {idUser, idClass} = req.params;
    try {
        const favorites = await Users.findByPk(idUser);
        await favorites.addClasses(idClass)
        const user = await Users.findByPk(idUser);
        res.json(user)
    } catch (error) {
        console.log(error)
    }
};

module.exports = {getFavorites,addFavorites}