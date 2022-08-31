const { Router } = require('express');
const { createUser, getAllUsers } = require('../Controllers/UsersControllers');

//crear usuario, borrar usuario, modificar usuario, get usuario 

const router = Router();
router.get("/", getAllUsers);
router.post("/created", createUser);
module.exports= router;