const string = require("@hapi/joi/lib/types/string");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024,
  },
  books: [
    {
      type: String,
      default: "",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
