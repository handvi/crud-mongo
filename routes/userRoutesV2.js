const express = require("express");
const { getUsersMongoose } = require("../controllers/userControllerV2");

const router = express.Router();

router.get("/", getUsersMongoose);

module.exports = router;
