import express from "express";
import habitRoutes from './Routes/habitRoutes.js'
import dotenv from 'dotenv'
import DatabaseConnection from "./Database/db.js";

dotenv.config()
DatabaseConnection()
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/habits', habitRoutes); 



app.listen(port, (res, req)=>{
    console.log(`Server is running on port ${port}`);
})