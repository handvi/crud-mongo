const express = require("express");
const { getUsers, updateUser, deleteUser } = require("../controllers/userController");
const { authMiddleware, authorizeRoles } = require("../middlewares/authMiddleware");
const { ADMIN } = require("../models/roles");

const router = express.Router();

router.get("/", authMiddleware, authorizeRoles([ADMIN]), getUsers);
router.put("/:id", authMiddleware, authorizeRoles([ADMIN]), updateUser);
router.delete("/:id", authMiddleware, authorizeRoles([ADMIN]), deleteUser);

module.exports = router;
