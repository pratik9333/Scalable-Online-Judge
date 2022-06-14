const sequelize = require("../config/dbConnection");

const { DataTypes } = require("sequelize");

const TestCase = sequelize.define("testcase", {
  input: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  output: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
});

module.exports = TestCase;
