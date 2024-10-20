import Habit from "../Model/habbitModel.js";



// Create a new habit
export const createHabit = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newHabit = new Habit({ title, description });
        await newHabit.save();
        res.status(201).json(newHabit);
    } catch (error) {
        res.status(500).json({ message: 'Error creating habit', error });
    }
};

// Get all habits
export const getAllHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.status(200).json(habits);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching habits', error });
    }
};

// Get a habit by ID
export const getHabitById = async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) {
            return res.status(404).json({ message: 'Habit not found' });
        }
        res.status(200).json(habit);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching habit', error });
    }
};

// Update a habit
export const updateHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!habit) {
            return res.status(404).json({ message: 'Habit not found' });
        }
        res.status(200).json(habit);
    } catch (error) {
        res.status(500).json({ message: 'Error updating habit', error });
    }
};

// Delete a habit
export const deleteHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (!habit) {
            return res.status(404).json({ message: 'Habit not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: 'Error deleting habit', error });
    }
};