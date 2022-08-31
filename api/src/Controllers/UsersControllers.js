const { Users } = require("../db.js");

const getAllUsers = async (req, res, next) => {
	try {
		const dbUsers = await Users.findAll();
		res.send(dbUsers);
	} catch (error) {
		console.log(error);
	}
};

const createUser = async (req, res, next) => {
	// console.log(req.body.email);
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
		} = req.body;
		const getAll = await Users.findAll();
		const emailPost = getAll.map((e) => e.email);
		console.log(emailPost);
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
		};
		await Users.update(usrObj, {
			where: { id: id },
		});
		res.json({ updated: true });
	} catch (error) {
		console.log(error);
	}
};
const userByName = async(req, res, next) => {
	try {
		const {name} = req.query;
		Classes.findAll({
			where:{name: name},
			where:{category: "teacher"}
		})
	} catch (error) {
		console.log(error)
	}
}

module.exports = { getAllUsers, createUser, updateUser, userByName };
