const express = require("express");
const { registration, login } = require("../controllers/user");

const router = express.Router();

router.post("/reg", registration);
router.post("/log", login);

module.exports = router;
