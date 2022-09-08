const {Videos, Classes} = require('../db.js');
const { Op } = require("sequelize");


const createVideo = async(req, res, next)=>{
    const {name, type, link, classId, userId} = req.body
    try {
        const video = await Videos.create({
            name, 
            link,
            type
        })
        await video.setClass(classId)
        await video.setUser(userId)
        res.json(video)
    } catch (error) {
        next(error)
    }
}

const allVideos = async (req, res, next) => {
    try {
        const allVideos = await Videos.findAll()
        res.json(allVideos)
    } catch (error) {
        next(error)
    }
}

const videoByName = async (req, res, next) => {
    const {name} = req.query
    try {
        const allVideos = await Classes.findAll({
            where: {
                name : {
                    [Op.iLike]: '%' + name + '%',

                },
            },
            include:[{
                model: Videos, 
            }]
        })
        res.json(allVideos)
    } catch (error) {
        next(error)
    }
}

const videoByTeacher = async(req, res, next) =>{
    const {userId} = req.params
    try {
        const allVideo = await Videos.findAll({
            where: {
                userId: userId
            }
        })
        res.json(allVideo)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createVideo,
    allVideos,
    videoByName,
    videoByTeacher
}