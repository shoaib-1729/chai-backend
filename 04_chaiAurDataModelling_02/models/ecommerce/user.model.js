import mongoose from "mongoose"

// schema
const userSchema = new mongoose.Schema({
    // fields: username, email, password
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

// model
export const User = mongoose.models("User", userSchema)