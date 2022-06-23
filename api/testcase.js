const router = require("express").Router();

const {
  createTestCaseForProblem,
  getTestCasesForProblem,
} = require("../controllers/testcase");

router.route("/").post(createTestCaseForProblem);

router.route("/").get(getTestCasesForProblem);

module.exports = router;
