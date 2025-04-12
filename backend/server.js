const express = require('express');
const dotenv = require('dotenv');
const userRouter = require("./routes/user.routes")
const connectDB = require('./config/db');
const mongoose = require("mongoose")

dotenv.config();
connectDB();


const app = express();
app.use(express.json());

const cors = require("cors")
app.use(cors())

// Routes
app.use('/api/candidate', require('./routes/candidateRoutes'));
app.use('/api/company', require('./routes/companyRoutes'));
app.use("/user",userRouter)

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));