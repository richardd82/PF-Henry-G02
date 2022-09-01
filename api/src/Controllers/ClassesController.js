const { Classes } = require('../db');

const createClass = async (req, res, next) => {
    try {
        const { name, lectureLink, codeReviewLink, description } = req.body;
        const newClass = await Classes.create({
            name,
            lectureLink,
            codeReviewLink,
            description,
        })
        res.json(newClass);
    } catch (error) {
        console.log(error)
    }
}
const classByName = async (req, res, next) => {
    try {
        const { name } = req.query;
        const nameSearched = await Classes.findAll({
            where: { name: name }
        });
        if (nameSearched.length > 0) {
            res.json(nameSearched)
        }
        else {
            res.status(400).json({ message: "La clase no existe" })
        }
    } catch (error) {
        console.log(error)
    }
}
const getAllVideos = async (req, res, next) => {
    try {
        const allVideos = await Classes.findAll();
        res.json(allVideos);
    } catch (error) {
        console.log(error)
    }

}

const classById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const classId = await Classes.findByPk(id)
        console.log(classId);
        if (!classId) {
            res.status(400).json({ message: "Id incorrecto" })
        }
        else { res.json(classId) }
    } catch (error) {
        console.log(error)
    }
};







module.exports = { createClass, classByName, getAllVideos, classById }