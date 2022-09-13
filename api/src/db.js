require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Users, Classes, Cohorts, Modules, Standups, Videos, Attendance} = sequelize.models;
// Standups, Cohorts, Modules, Classes

// Aca vendrian las relaciones
Users.belongsToMany(Classes, { through: "Users_Favorites" });
Classes.belongsToMany(Users, { through: "Users_Favorites" });
// // Classes
Classes.belongsTo(Modules);
Classes.belongsTo(Cohorts);
Classes.hasMany(Videos)
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
Users.hasMany(Videos)
// // Videos
Videos.belongsTo(Classes);
Videos.belongsTo(Users);
Videos.belongsTo(Cohorts);



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
