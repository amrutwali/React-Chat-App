const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 20,
  },
  password: {
    type: String,
    min: 8,
    max: 50,
  },
  isAvatar: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);
