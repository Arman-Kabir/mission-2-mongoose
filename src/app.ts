import express, { Application, Request, Response } from "express";
// const express = require("express");
import cors from "cors";
import { NextFunction } from "connect";

const app: Application = express();
// console.log(app);

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting a test data into mongodb

  /*
    Step1:Interface
    Step2:Schema
    Step3:Model
    Step4: Database Query
    */
  res.send("Hello World!");

  //creating an interface
  interface IUser{
    id:string;
    role:"student",
    password:'string';
    name:{
        
    }
  }

  next();
});

export default app;
