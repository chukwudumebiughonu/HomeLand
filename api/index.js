import express from "express";
<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.log(err);
});
=======

>>>>>>> origin/main
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
  });