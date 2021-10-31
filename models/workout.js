const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a category for the workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for the workout"
            },
            durations: { type: Number },
            sets: { type: Number },
            reps: { type: Number },
            weight: { type: Number },
            distance: { type: Number }
        }
    ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
