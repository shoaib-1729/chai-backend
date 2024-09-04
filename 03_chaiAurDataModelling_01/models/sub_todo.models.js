import mongoose from "mongoose";

// schema
const subTodoSchema = new mongoose.Schema({
    // title of subtodo
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    // user ko bhi refer kar sakte hai, in case of multiple users ek hi subtodo mei
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });

//model
export const SubTodo = mongoose.models("SubTodo", subTodoSchema);