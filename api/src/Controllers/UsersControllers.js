const axios = require ("axios");
const {Users} = require ("../db.js");


const getAllUsers = async(req,res,next)=>{
    try{
const dbUsers = await Users.findAll();
res.send(dbUsers)
    }catch(error){
    console.log(error)
    }
};


const createUser = async(req,res,next) =>{
    try {
        const {name, lastname, email, image, username, password, active, category}= req.body;
        const getAll= await Users.findAll();
        console.log(getAll.users[0])
        if (!getAll.users[0]){
        const newUser = await Users.create({name, lastname, email, image, username, password, active, category})
        return res.json(newUser)}
        else{return res.json({message:"Usuario ya existente"})}
    }catch (error){
        console.log(error)
    }
}

module.exports= {getAllUsers,createUser};
