import express from "express";
import habitRoutes from './Routes/habitRoutes.js'; // Adjust path as needed
import dotenv from 'dotenv';
import DatabaseConnection from "./Database/db.js";

dotenv.config();
DatabaseConnection();

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

app.use('/api/habits', habitRoutes); // Use the habit routes

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
