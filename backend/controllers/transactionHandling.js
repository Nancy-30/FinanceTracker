const Transaction = require("../models/Transaction");
const User = require("../models/User");
const { debit, credit } = require("../utilities/type");

// fetch transactions
const getTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transactions = await Transaction.find({ userId: id });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// add new trasaction
const addTransaction = async (req, res) => {
  try {
    const { transaction, amount, type, paymentMode } = req.body;
    const { id } = req.params;

    const tempUser = await User.findOne({ _id: id });

    if (!tempUser) {
      return res.status(404).json("user not found");
    }

    if (type === "debit") {
      debit(amount, id);
    } else if (type === "credit") {
      credit(amount, id);
    }

    const newTrans = new Transaction({
      transaction,
      amount,
      type,
      paymentMode,
      userId: tempUser._id,
    });
    await newTrans.save();
    res.status(200).json(tempUser);
  } catch {
    res.status(500).json({ message: message });
  }
};

// delete transaction
const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await Transaction.findByIdAndDelete({ _id: id });
    res.status(200).json("Trasaction is deleted");
  } catch {
    res.status(404).json("There is no trasaction of this id");
  }
};

// update transaction
const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { transaction, amount, type, paymentMode } = req.body;
    const tempTrans = await Transaction.findOne({ _id: id });

    if (!tempTrans) {
      res.status(404).json("No transaction found");
    }

    if (type === "debit") {
      debit(amount, id);
    } else if (type === "credit") {
      credit(amount, id);
    }

    tempTrans.transaction = transaction;
    tempTrans.type = type;
    tempTrans.amount = amount;
    tempTrans.paymentMode = paymentMode;

    await tempTrans.save();
    res.status(200).json(tempTrans);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = {
  addTransaction,
  getTransaction,
  deleteTransaction,
  updateTransaction,
};
