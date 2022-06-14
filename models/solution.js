const sequelize = require("../config/dbConnection");

const { DataTypes } = require("sequelize");

const Solution = sequelize.define("solution", {
  verdict: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
});

module.exports = Solution;
