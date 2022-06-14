require("dotenv").config({ path: "../.env" });

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: { connectTimeout: 60000 },
    logging: false,
  }
);

module.exports = sequelize;
