const { Cohorts } = require("../db.js");

const getAllCohorts = async(req, res, next)=>{
    try { 
        const allCohorts = await Cohorts.findAll();
        res.send(allCohorts);
    } catch (error) {
        console.log(error)
    }
};

const createCohorts = async(req,res)=>{
    try {
        const {name} = req.body;
        const cohorts = await Cohorts.findAll();
        console.log(cohorts);
         const mapCohorts = cohorts.map((el)=> el.name === name)
         console.log(mapCohorts);
         if(!mapCohorts){
            return res.status(400).json({message: "El nombre ya existe"})
         }else{
        const newCohort = await Cohorts.create({name});
        res.json(newCohort)}
    } catch (error) {
        console.log(error)
    }
};

module.exports = {getAllCohorts, createCohorts}