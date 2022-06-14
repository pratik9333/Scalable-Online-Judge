const mongoose = require("mongoose");

exports.dbConnection = () => {
  try {
    mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`DB is connected!`);
      })
      .catch((error) => {
        console.log(`DB failed to connect due to ${error.message}!`);
        process.exit(1);
      });
  } catch (error) {}
};
