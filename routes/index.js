const express = require("express");
const router = express.Router();

var mongoose = require("mongoose");
var UserModel = mongoose.model("forms");

router.get("/list", (req, res) => {
  UserModel.find({})
    .lean()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/add", (req, res) => {
  res.render("form", {
    title: "form",
    style: "form.css",
  });
});

router.post("/add", (req, res) => {
  var User = new UserModel();
  User.name = req.body.name;
  User.email = req.body.email;
  User.phno = req.body.phno;
  User.gender = req.body.gender;


  var hobbies = [];
  req.body.reading ? hobbies.push("reading") : null,
    req.body.travelling ? hobbies.push("travelling") : null,
    req.body.music ? hobbies.push("Listening to music") : null;
  User.hobbies = hobbies;

 

  User.save((err, done) => {
    if (!err) {
      res.send("Added successfully");
    } else {
      res.send("Error occurs during saving data in database >> " + err);
    }
  });
});

module.exports = router;
