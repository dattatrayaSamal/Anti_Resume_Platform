const authentication = require("../middlewares/auth.middleware")
const express = require("express");
const { userRegister, userLogin} = require("../controllers/user.controllers");
const userRouter = express.Router();


// Define routes
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);


module.exports = userRouter





