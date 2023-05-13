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

  //creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: "string";
    name: {
      firstName: string;
      middlename?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  //creating schema using interface
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password:{
        type:String,
        required:true
    },
    name:{
        firstName:{
            type:String,
            required:true,
        },
        middleName:{
            type:String,
        },
        lastName:{
            type:String,
            required:true,
        }
    },
    dateOfBirth:{
        type:String
    },
    gender: {
        type:String,
        enum:['male','female']
    },
    email:{
        type:String,
        required:true,
    },
    contactNo:{
        type:String,
        required:true,
    },
    emergencyContactNo:{
        type:String,
    } ,
    presentAddress:{
        type:String,
    } ,
    permanentAddress:{
        type:String,
        required:true,
    } ,   
    // avatar:{
    //     type:String,
    // }
  });
});

export default app;
