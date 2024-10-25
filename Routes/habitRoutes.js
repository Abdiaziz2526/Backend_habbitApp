import express from "express";
import {
    createHabit,
    getAllHabits,
    getHabitById,
    updateHabit,
    deleteHabit,
} from "../Controller/habitConttroller.js"; // Adjust the path as needed

const router = express.Router();

// Define the routes
router.post("/", createHabit); // Handles POST requests to /api/habits
router.get("/", getAllHabits); // Handles GET requests to /api/habits
router.get("/:id", getHabitById); // Handles GET requests to /api/habits/:id
router.put("/:id", updateHabit); // Handles PUT requests to /api/habits/:id
router.delete("/:id", deleteHabit); // Handles DELETE requests to /api/habits/:id

export default router; // Export the router for use in other files
