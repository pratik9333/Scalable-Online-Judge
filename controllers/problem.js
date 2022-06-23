const Problem = require("../models/problem");

exports.createProblem = async (req, res) => {
  try {
    const { name, statement, difficulty } = req.body;
    if (!name || !statement || !difficulty) {
      return res.status(400).json({ error: "Please provide all fields" });
    }

    await Problem.create(req.body);
    res.status(200).json({ success: "Problem created" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error while creating problem, please try again" });
  }
};

exports.getListOfProblems = async (req, res) => {
  try {
    const { limit, offset } = req.query;

    const problems = await Problem.findAll({
      attributes: { exclude: ["statement", "name", "difficulty"] },
      limit: +limit,
      offset: +offset,
    });

    res.render("home", {
      problems: problems.length === 0 ? "None" : problems?.toJSON(),
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error while fetching problem, please try again" });
  }
};

// const { id } = req.params;
// if (!id) {
//   return res.status(400).json({ error: "Please provide problem ID" });
// }

exports.getParticularProblem = async (req, res) => {
  try {
    const { problemCode } = req.params;

    if (!problemCode) {
      return res.status(400).json({ error: "Please provide problem code" });
    }

    const problem = await Problem.findByPk(problemCode);

    if (!problem) {
      res.status(400).json({ error: "No such problem exists!" });
    }

    res.render("problem", {
      problems: problem?.toJSON(),
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error while fetching problem, please try again" });
  }
};
