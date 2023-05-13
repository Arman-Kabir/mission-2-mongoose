import express, { Application } from "express";
// const express = require("express");
import cors from "cors";

const app: Application = express();

//Application routes
import userRoutes from './app/modules/user/user.route';



//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user",userRoutes );
app.use('/api/v1/user',userRoutes);


export default app;

/*breakdown
interface -> interface.ts
Schema,model -> model.ts

route

route function->controller.ts

database query function --> service.ts
**Data that maintains business logic - i must keep them in service.If we choose sql database inatead of mongoose - then we can only modify the service.ts

*/
