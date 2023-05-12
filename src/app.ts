import express from "express";
// const express = require("express");
import cors from "cors";

const app = express();
// console.log(app);


//using cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;