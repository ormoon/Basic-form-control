var mongoose = require("mongoose");
const UserModel = require("./formModel");
mongoose.connect(
  " mongodb://127.0.0.1:27017/Assignment",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, done) {
    if (!err) {
      console.log("Database connection is successful");
    } else {
      console.log("Errors occurs during Connecting to database");
    }
  }
);
