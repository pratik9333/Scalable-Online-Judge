const Problem = require("../models/problem");
const Solution = require("../models/solution");
const TestCase = require("../models/testcase");

exports.Relations = () => {
  //

  // 1:M Solutions and Problem
  Solution.belongsTo(Problem);
  Problem.hasMany(Solution);

  // 1:M TestCase and Problem
  TestCase.belongsTo(Problem);
  Problem.hasMany(TestCase);

  //
};
