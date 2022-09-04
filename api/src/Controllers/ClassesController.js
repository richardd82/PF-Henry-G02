const { Classes, Cohorts, Users } = require('../db');
const {Op} = require('sequelize');



const createClass = async (req, res, next) => {
    try {
        const { name, lectureLink, lectureLink2, codeReviewLink, codeReviewLink2, description, moduleId, cohortId } = req.body;
        const newClass = await Classes.create({
            name,
            lectureLink,
            lectureLink2,
            codeReviewLink,
            codeReviewLink2,
            description,
        })
        await newClass.setModule(moduleId);
        await newClass.setCohort(cohortId)
        res.json(newClass);
    } catch (error) {
        console.log(error)
    }
};

const classByName = async (req, res, next) => {
    try {
        const { name } = req.query;
        const nameSearched = await Classes.findAll({
            where: { name: {
              [Op.iLike]: '%' + name + '%',
            }, }
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
};

const getAllVideos = async (req, res, next) => {
    try {
        if (req.query.filter) {
            const videoFilter = await Classes.findAll({ where: { name:{[Op.iLike]: "%" + req.query.filter + "%" }} ,
            })
            return res.json(videoFilter)
        }
        // where: {
        //     name: { [Op.iLike]: "%" + name + "%" }
        const allVideos = await Classes.findAll({
            include:[{
                model: Cohorts, 
            }],
            // include:[{
            //     model: Users, 
            //     where: {category: "teacher"}
            // }]
        });
        res.json(allVideos);
} catch (error) {
    console.log(error)
}

};

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