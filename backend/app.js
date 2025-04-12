const express = require("express");
const userRouter = require("./routes/user.routes");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use("/user", userRouter);

app.listen(8000, async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dattatrayasamal:dattamongodb@cluster0.t5moz.mongodb.net/resume"
    );
    console.log("connected to db");
  } catch (error) {
    console.log("error while connection to db", error);
  }
  console.log("server started on port 8000");
});
