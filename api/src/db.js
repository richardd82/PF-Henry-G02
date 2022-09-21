require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_DIALECT } = process.env;

// let sequelize =
// 	process.env.NODE_ENV === "production"
// 		? new Sequelize({
// 				database: DB_DATABASE,
// 				dialect: "postgres",
// 				host: DB_HOST,
// 				port: 5432,
// 				username: DB_USER,
// 				password: DB_PASSWORD,
// 				pool: {
// 					max: 3,
// 					min: 1,
// 					idle: 10000,
// 				},
// 				dialectOptions: {
// 					ssl: {
// 						require: true,
// 						// Ref .: https://github.com/brianc/node-postgres/issues/2009
// 						rejectUnauthorized: false,
// 						keepAlive: true,
// 					},
// 				},
// 				ssl: true,
// 		  })
// 		: new Sequelize(
// 				` postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/development`,
// 				{ logging: false, native: false }
// 		  );


const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "/models", file)));
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
	Users,
	Classes,
	Cohorts,
	Modules,
	Standups,
	Videos,
	Attendance,
	Reviews,
	Payments,
} = sequelize.models;
// Standups, Cohorts, Modules, Classes

// Aca vendrian las relaciones
Users.belongsToMany(Videos, { through: "Users_Favorites" });
Videos.belongsToMany(Users, { through: "Users_Favorites" });
// // Classes
Classes.belongsTo(Modules);
Classes.belongsTo(Cohorts);
Classes.hasMany(Videos);
// // Modules
Modules.hasMany(Classes);
Modules.hasMany(Users);
// // Cohorts
Cohorts.hasMany(Users);
Cohorts.hasMany(Standups);
Cohorts.hasMany(Classes);
Cohorts.hasMany(Videos);
// // Standups
Standups.hasMany(Users);
Standups.belongsTo(Cohorts);
// // Users
Users.belongsTo(Cohorts);
Users.belongsTo(Modules);
Users.belongsTo(Standups);
Users.hasMany(Payments);
// Users.hasMany(Videos)
// // Videos
Videos.belongsTo(Classes);
//Videos.belongsTo(Users);
Videos.belongsTo(Cohorts);
// //Review
Users.hasMany(Reviews);
Reviews.belongsTo(Users);
// // Payments
Payments.belongsTo(Users);

module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
