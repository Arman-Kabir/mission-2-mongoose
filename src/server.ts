// import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const express = require("express");
// const mongoose = require("mongoose");

const app = express();
const port = 5000;

console.log(app);

//using cors
app.use(cors());

//database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`Database connection successfullly`);

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }
}

bootstrap();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
