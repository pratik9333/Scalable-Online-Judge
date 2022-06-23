const sequelize = require("../config/dbConnection");

const { DataTypes } = require("sequelize");

const TestCase = sequelize.define("testcase", {
  input: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  output: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = TestCase;
