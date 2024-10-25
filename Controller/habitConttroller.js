import Habit from '../Model/habbitModel.js'; // Adjust the path based on your project structure

// Create a new habit
export const createHabit = async (req, res) => {
    console.log("Request received:", req.body); // Log the incoming request
    if (!req.body.title || !req.body.description) {
        return res.status(400).json({ message: 'Title and description are required.' });
    }
    
    try {
        const { title, description } = req.body;
        const newHabit = new Habit({ title, description });
        await newHabit.save();
        res.status(201).json(newHabit);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Error creating habit', error });
    }
};

// Get all habits
export const getAllHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.status(200).json(habits);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching habits', error });
    }
};

// Get habit by ID
export const getHabitById = async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) return res.status(404).json({ message: 'Habit not found' });
        res.status(200).json(habit);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching habit', error });
    }
};

// Update habit by ID
export const updateHabit = async (req, res) => {
    try {
        const { title, description } = req.body;
        const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
        if (!updatedHabit) return res.status(404).json({ message: 'Habit not found' });
        res.status(200).json(updatedHabit);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating habit', error });
    }
};

// Delete habit by ID
export const deleteHabit = async (req, res) => {
    try {
        const deletedHabit = await Habit.findByIdAndDelete(req.params.id);
        if (!deletedHabit) return res.status(404).json({ message: 'Habit not found' });
        res.status(200).json({ message: 'Habit deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting habit', error });
    }
};
