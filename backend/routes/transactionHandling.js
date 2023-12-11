const express = require("express");
const {
  addTransaction,
  getTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../controllers/transactionHandling");
const { verify } = require("../Token/Verifytoken");

const router = express.Router();

router.post("/:id/add", verify, addTransaction);
router.get("/:id/getTrans", verify, getTransaction);
router.delete("/:id/del", verify, deleteTransaction);
router.put("/:id/update", verify, updateTransaction);

module.exports = router;
