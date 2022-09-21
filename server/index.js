const express = require("express");
const cors = require("cors");

const connectDB = require("./connect");
const userRoutes = require("./routes/userRoutes");
const app = express();
// environment variables
require("dotenv").config();
const port = process.env.PORT;
// middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);
// app
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI); // db connect
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
