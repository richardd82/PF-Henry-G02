const { Router } = require('express');
const { createUser, getAllUsers, updateUser, userByTeacher, userByStudent } = require('../Controllers/UsersControllers');

//crear usuario, borrar usuario, modificar usuario, get usuario 

const router = Router();
router.get("/", getAllUsers);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/byTeacher", userByTeacher);
router.get("/byStudent", userByStudent);

module.exports= router;