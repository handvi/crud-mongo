const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["user", "admin"] },
});

module.exports = mongoose.model("User", userSchema);
