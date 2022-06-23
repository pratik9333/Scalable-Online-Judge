const Problem = require("../models/problem");
const TestCase = require("../models/testcase");

exports.createTestCaseForProblem = async (req, res) => {
  try {
    const { input, output } = req.body;
    const { id } = req.params;

    if (!input || !output) {
      return res.status(400).json({ error: "Please provide all fields" });
    }

    if (!id) {
      return res.status(400).json({ error: "Please provide problem id" });
    }

    const problem = await Problem.findByPk(id);

    if (!problem) {
      res.status(400).json({ error: "No such problem exists!" });
    }

    const testCase = await TestCase.create(req.body);

    await problem.addTestCase(testCase);

    res.status(200).json({ success: "Testcase created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error while creating testcase, please try again" });
  }
};

exports.getTestCasesForProblem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Please provide problem id" });
    }

    const problem = await Problem.findByPk(id);

    if (!problem) {
      res.status(400).json({ error: "No such problem exists!" });
    }

    const testCases = await Problem.getTestCases();

    res.status(200).json({ success: true, testCases });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error while fetching testcase, please try again" });
  }
};
