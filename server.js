require("dotenv").config();

const cors = require("cors");
const express = require("express");
const sequelize = require("./config/dbConnection");
const app = express();

const Problem = require("./models/problem");

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
    console.log(`DB Connected`);
    // const problems = await Problem.create({
    //   name: "111",
    //   code: "111",
    //   difficulty: "111",
    //   statement: "111",
    // });

    // console.log(problems.toJSON());
    // const problems = await Problem.findAll();

    // console.log(problems);
  })
  .catch((err) => {
    console.error("error", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
