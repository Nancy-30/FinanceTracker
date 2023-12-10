const User = require("../models/User");
const bcrypt = require("bcrypt");

const registration = async (req, res) => {
  try {
    const { username, email, password, amount } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      amount,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const tempUser = await User.findOne({ email: email });

    if (!tempUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswordValid = await bcrypt.compare(password, tempUser.password);
    if (!isPasswordValid) {
      return res.status(404).json({ message: "Invalid Password" });
    }

    res.status(200).json(tempUser);
  } catch {
    res.status(500).json({ message: err });
  }
};

module.exports = { registration, login };
