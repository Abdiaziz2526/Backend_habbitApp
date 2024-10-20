import express from "express";
import mongoose, { Schema } from "mongoose";

const habbitSchema = new Schema({
   title: {
    type: String,
    required: true
   },
   description: {
    type: String,
    required: true
   },
   createdDate:{
    type: Date,
    default: Date.now
   },

   
})
const Habit = mongoose.model('Habit', habbitSchema);

export default Habit;