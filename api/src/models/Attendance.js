const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('attendance', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    attendance: {
        type: DataTypes.BOOLEAN
    },
    usersId: {
      type: DataTypes.TEXT
    },
    cohortId: {
        type: DataTypes.STRING
    },
    classId: {
        type: DataTypes.STRING
    },
    standupId: {
        type: DataTypes.STRING
    }
  });
};
