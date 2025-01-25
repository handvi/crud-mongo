const express = require("express");
const { getUsersNative } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsersNative);

module.exports = router;
