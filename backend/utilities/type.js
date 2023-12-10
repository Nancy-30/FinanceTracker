const User = require("../models/User");

const debit = async (amount, id) => {
  try {
    const tempUser = await User.findOne({ _id: id });

    if (!tempUser) {
      return "user not found";
    }
    const tempAmount = tempUser.amount;
    tempUser.amount = tempAmount - amount;
    await tempUser.save();
  } catch (err) {
    return err;
  }
};

const credit = async (amount, id) => {
  try {
    const tempUser = await User.findOne({ _id: id });
    if (!tempUser) {
      return "user not found";
    }
    const tempAmount = tempUser.amount;
    tempUser.amount = tempAmount + amount;
    await tempUser.save();
  } catch (err) {
    return err;
  }
};

module.exports = { debit, credit };
