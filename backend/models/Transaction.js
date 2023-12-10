const mongoose = require("mongoose");
const User = require("./User")

const transactionSchema = new mongoose.Schema({
  transaction: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  paymentMode: { type: String, default: "UPI" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Transaction", transactionSchema);
