const { Router } = require('express');
const { createUser, getAllUsers, updateUser } = require('../Controllers/UsersControllers');

//crear usuario, borrar usuario, modificar usuario, get usuario 

const router = Router();
router.get("/", getAllUsers);
router.post("/created", createUser);
router.put("/updated/:id", updateUser);
module.exports= router;