const { Standups } = require("../db.js")

const allStandUp = async (req, res, next) => {
    try {
        const getAll = await Standups.findAll();
        res.send(getAll);
    } catch (error) {
        console.log(error)
    }
};

const createStandUp = async (req, res, next) => {
    const { name, cohortId } = req.body;
    try {
        const getAll = await Standups.findAll();
        const searchedName = getAll.find((el) => el.name === name)
        if (searchedName) {
            res.status(400).json({ message: "El grupo ingresado ya existe" })
        } else {
            const newStandUp = await Standups.create({ name })
            await newStandUp.setCohort(cohortId);
            res.json(newStandUp)
        }
    } catch (error) {
        console.log(error)
    }
};


module.exports = { allStandUp, createStandUp }