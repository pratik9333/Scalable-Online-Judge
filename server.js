require("dotenv").config();

const cors = require("cors");
const express = require("express");
const sequelize = require("./config/dbConnection");
const app = express();

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors);

// import all routes here

// router middleware

// connection with db
sequelize
  .sync()
  .then(async (result) => {
    console.log(`PG DB Connected`);
  })
  .catch((err) => {
    console.error("error", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
