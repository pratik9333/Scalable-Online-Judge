const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnection");

const Problem = sequelize.define("problems", {
  statement: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  name: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  code: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
});

module.exports = Problem;
