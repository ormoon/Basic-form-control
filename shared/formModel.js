const mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be required"],
    minlength: [5, "Username must be of five characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Enter valid email address",
    ],
    unique: true,
  },
  phno: {
    type: Number,
    required: true,
    validate: [
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Enter valid phone number",
    ],
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  hobbies: {
    type: Array,
    required: true,
  },
});

mongoose.model("forms", userSchema);
