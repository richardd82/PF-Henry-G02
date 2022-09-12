const {Asistencias, Users} = require("../db.js")

const createAsistencia = async (req, res, next)=>{
    try {
        const {asistencia, name, id} = req.body
        const asist = await Asistencias.create({asistencia})
        const users = await Users.findAll({
            where: {
                name: name,
                id: id
            }
        }) 
        await asist.addUsers(users)
        res.json(asist)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createAsistencia
}