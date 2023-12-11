const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    const accessToken = jwt.sign({ id: User._id }, process.env.SECRET_KEY, {
      expiresIn: "10d",
    });

    res.status(200).json({ tempUser, accessToken });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { registration, login };
