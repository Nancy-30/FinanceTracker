const express = require("express");
const { registration, login, logout, home } = require("../controllers/user");
const { verify } = require("../Token/Verifytoken");

const router = express.Router();

router.post("/reg", registration);
router.post("/log", login);
router.post("/logout", logout);
module.exports = router;
