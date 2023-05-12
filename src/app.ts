import express, { Application, Request, Response } from "express";
// const express = require("express");
import cors from "cors";
import { NextFunction } from "connect";

const app: Application = express();
// console.log(app);

//using cors
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
});

export default app;
