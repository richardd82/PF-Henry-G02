const { Users, Classes } = require("../db.js");
const { Op } = require("sequelize");


const getAllUsers = async (req, res, next) => {
	try {
		if (req.query.filter) {
			const usersFilter = await Users.findAll({ where: { category: req.query.filter } });
			return res.json(usersFilter)
		}
		const dbUsers = await Users.findAll();
		console.log(dbUsers.__proto__)
		return res.send(dbUsers);
	} catch (error) {
		console.log(error);
	}
};

const createUser = async (req, res, next) => {
	try {
		const {
			name,
			lastname,
			email,
			image,
			username,
			password,
			active,
			category,
			cohortId,
			standupId,
			moduleId
		} = req.body;
		const getAll = await Users.findAll();
		const emailPost = getAll.map((e) => e.email);
		if (!emailPost.find((e) => e === email)) {
			const newUser = await Users.create({
				name,
				lastname,
				email,
				image,
				username,
				password,
				active,
				category,
			});
			await newUser.setCohort(cohortId)
			await newUser.setStandup(standupId);
			await newUser.setModule(moduleId);
			res.json(newUser);
		} else {
			return res.json({ message: "Usuario ya existente" });
		}
	} catch (error) {
		console.log(error);
	}
};

const updateUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		const {
			name,
			lastname,
			email,
			image,
			username,
			password,
			active,
			category,
			cohortId,
			standupId,
		} = req.body;
		const usrObj = {
			name,
			lastname,
			email,
			image,
			username,
			password,
			active,
			category,
			cohortId,
			standupId,
		};
		await Users.update(usrObj, {
			where: { id: id },
		});
		res.json({ updated: true });
	} catch (error) {
		console.log(error);
	}
};

const userByTeacher = async (req, res, next) => {
	try {
		const { name, lastname } = req.query;

		const searchedName = await Users.findAll({
			where: {
				name: { [Op.iLike]: "%" + name + "%" },
				[Op.and]: [{ category: "teacher" }],
			},
		});
		if (searchedName.length <= 0) {
			res.status(400).json({ message: 'El profesor ingresado no existe.' });
		}
		else {
			res.json(searchedName);
		}

	} catch (error) {
		console.log(error);
	}
};

const userByStudent = async (req, res, next) => {
	try {
		const { name, lastname } = req.query;
		console.log(name)

		const searchedTeacher = await Users.findAll({
			where: {
				name: { [Op.iLike]: "%" + name + "%" },
				[Op.and]: [{ category: "student" }],
			},
		}); console.log(searchedTeacher)
		if (searchedTeacher.length <= 0) {
			res.status(400).json({ message: 'El alumno ingresado no existe.' });
		}
		else {
			res.json(searchedTeacher);
		}

	} catch (error) {
		console.log(error);
	}
};

module.exports = { getAllUsers, createUser, updateUser, userByTeacher, userByStudent };
