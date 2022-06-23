require("dotenv").config();

const cors = require("cors");
const express = require("express");
const sequelize = require("./config/dbConnection");
const exphb = require("express-handlebars");
const path = require("path");
const app = express();

// import all routes here
const problem = require("./api/problem");
const solution = require("./api/solution");
const testcase = require("./api/testcase");

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const myhbs = exphb.create({});

app.engine("handlebars", myhbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

// router middleware
app.use("/problem", problem);
app.use("/solution", solution);
app.use("/testcase", testcase);

app.get("/", (req, res) => {
  res.send("hello & welcome to our api!");
});

// relations
require("./utils/relations").Relations();

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
