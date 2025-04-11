const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()
const PORT = process.env.PORT;


const userRouter = require("./routes/user.routes")
const candidateRoutes=require("./routes/candidateRoutes")
const companyRoutes = require('./routes/companyRoutes')
const connectDB = require('./config/db');



// Routes
app.use('/api/candidate',candidateRoutes);
app.use('/api/company', companyRoutes);
app.use("/user", userRouter);



// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});





app.listen(PORT, async() => {
  try {
    await connectDB()
    console.log("connected to db")
  } catch (error) {
    console.log("error while connection to db",error)
  }
  console.log(`Server started on port ${PORT}`);
});
