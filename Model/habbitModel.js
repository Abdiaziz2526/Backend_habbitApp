import mongoose, { Schema } from "mongoose";

const habitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
});

const Habit = mongoose.model('Habit', habitSchema);

export default Habit;
