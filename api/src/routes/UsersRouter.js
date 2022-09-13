const { Router } = require('express');
const { createUser, getAllUsers, updateUser, userByTeacher, userByStudent, getAllTeachers, usersValidate } = require('../Controllers/UsersControllers');

//crear usuario, borrar usuario, modificar usuario, get usuario 

const router = Router();
router.get("/", getAllUsers);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/byTeacher", userByTeacher);
router.get("/byStudent", userByStudent);
router.get("/teachers", getAllTeachers);
router.post("/", usersValidate);

module.exports = router;