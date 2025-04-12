const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, require: true },
  role: { type: String, enum: ["candidate", "employer"], default: "candidate" },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
