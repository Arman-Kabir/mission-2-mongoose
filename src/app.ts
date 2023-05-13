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

});

export default app;

/*breakdown
interface -> interface.ts
Schema,model -> model.ts

route

route function->controller.ts

database query function --> service.ts
**Data that maintains business logic - i must keep them in service.If we choose sql database inatead of mongoose - then we can only modify the service.ts

*/



