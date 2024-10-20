import express from "express";
import {
  createHabit,
  deleteHabit,
  getAllHabits,
  getHabitById,
  updateHabit,
} from "../Controller/habitConttroller.js";

const router = express.Router(); // Correctly using Router

// Define the routes
router.post("/", createHabit); // Adjusted to match '/api/habits'
router.get("/", getAllHabits); // Get all habits
router.get("/:id", getHabitById); // Get habit by ID
router.put("/:id", updateHabit); // Update habit by ID
router.delete("/:id", deleteHabit); // Delete habit by ID

export default router; // Ensure to export the router
