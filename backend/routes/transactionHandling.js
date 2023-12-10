const express = require("express");
const {
  addTransaction,
  getTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../controllers/transactionHandling");

const router = express.Router();

router.post("/:id/add", addTransaction);
router.get("/:id/getTrans", getTransaction);
router.delete("/:id/del", deleteTransaction);
router.put("/:id/update", updateTransaction);

module.exports = router;
