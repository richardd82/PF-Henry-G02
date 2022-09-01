const {Modules} = require('../db');


const modules =  [
    "Módulo 1",
    "Módulo 2",
    "Módulo 3",
    "Módulo 4",
    "Proyecto Individual",
    "Job Preparation"                   
];

const createModules = async(req, res) => {
    try{
        const modulesLocal = modules.forEach(async (e) => {  
            // console.log(e + '=================================>')          
        await Modules.findOrCreate({ //Ingresa los datos a la tabla si no existen
             where: {name: e} //donde el name sea cada una de las dietas del Array Local
        });
    }); 
    console.log(modules + '********************************************')       
        const allModules = await Modules.findAll();    
        console.log(allModules + '------------------------------------------')     
        res.status(200).json(allModules);

    }catch(e){
        res.status(400).json({message: e})
    }
};
const moduleId = async(req, res, next) => {
    try {
        const {id} = req.params
        const module = await Modules.findByPk(id)
        res.json(module)
    } catch (error) {
        next(error)
    }
}

module.exports = {createModules, moduleId};