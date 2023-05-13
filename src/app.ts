import express, { Application, Request, Response } from "express";
// const express = require("express");
import cors from "cors";
import { NextFunction } from "connect";
import { Schema, model } from "mongoose";

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

 

 

  //(async function) ---> database query
  const createUserToDB = async () => {
    //   instance
    const user = new User({
      id: "778",
      role: "student",
      password: "jhakanaka",
      name: {
        firstName: "Mr.mezbaul",
        middleName: "abedin",
        lastName: "persian",
      },
      gender: "male",
      email: "abc@gmail.com",
      contactNo: "0177777777",
      emergencyContactNo: "01888888888",
      presentAddress: "Uganda",
      permanentAddress: "USA",
    });
    await user.save();
  };

  createUserToDB();
  console.log(User);
});

export default app;

/*breakdown
interface -> interface.ts
Schema,model -> model.ts

route

route function->controller.ts

database query function --> service.ts

*/



