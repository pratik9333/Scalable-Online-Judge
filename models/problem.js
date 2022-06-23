const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnection");
const crypto = require("crypto");

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

Problem.beforeCreate((problem, option) => {
  problem.code = crypto.randomBytes(6).toString("hex");
});

module.exports = Problem;
