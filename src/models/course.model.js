import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        startDate: {
            type: Date,
            default: Date.now(),
            required: true
        },
        endDate: {
            type: Date,
            default: Date.now(),
            required: true
        },
        courseImage: {
            type: String,
            required: true,     //Cloudinary url
        }
    }
});



export const Course = mongoose.model("Course", courseSchema);