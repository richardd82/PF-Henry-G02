const { Router } = require('express');
const { createUser, getAllUsers, updateUser, userByTeacher, userByStudent, getAllTeachers, userByEmail, usersValidate, getById } = require('../Controllers/UsersControllers');

//crear usuario, borrar usuario, modificar usuario, get usuario 

const router = Router();
router.get("/", getAllUsers);
router.get('/byId/:id', getById)
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/byTeacher", userByTeacher);
router.get("/byStudent", userByStudent);
router.get("/teachers", getAllTeachers)
router.get("/byEmail", userByEmail);
router.post("/", usersValidate);


module.exports = router;
