require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const { dbConnection } = require("./config/dbConnection");

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors);

// import all routes here

// router middleware

// connection with db
dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
