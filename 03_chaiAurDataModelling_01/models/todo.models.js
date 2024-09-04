import mongoose from "mongoose"

// schema
const todoSchema = new mongoose.Schema({
    // title of the todo
    content: {
        type: String,
        required: true,
    },
    // completed field
    completed: {
        type: Boolean,
        default: false
    },
    // created by field
    createdBy: {
        // yaha pr user ko refer karege
        // special type, yeh aise hi likha jaayega, no change
        type: mongoose.Schema.Types.ObjectId,
        // refer to the schema to which it relates, same naam hona chahiye joh model mei tha
        ref: "User",
    },
    // har todo ka subTodo bhi hoga
    // ek array [] aise bhi define kar sakte hai, type ke alawa
    subTodos: [
        // different objects inside subTodo
        // yeh subTodo, todo ko bhi refer kar sakti hai
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
}, { timestamps: true })

// models
export const Todo = mongoose.models("Todo", todoSchema)