const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // validation
    const existUser = await User.findOne({ username });
    if (existUser) {
      return res.json({ msg: "Username already used", status: false });
    }
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.json({ msg: "Email already Exists", status: false });
    }
    // store to db
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    console.log(user);
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};

module.exports = { register };
