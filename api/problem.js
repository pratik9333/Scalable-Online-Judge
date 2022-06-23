const router = require("express").Router();

const {
  getListOfProblems,
  createProblem,
  getParticularProblem,
} = require("../controllers/problem");

router.route("/").get(getListOfProblems);

router.route("/:problemCode").get(getParticularProblem);

router.route("/create").post(createProblem);

module.exports = router;
