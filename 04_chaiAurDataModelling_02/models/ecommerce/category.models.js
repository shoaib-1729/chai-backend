import mongoose from "mongoose";

// schema
const categorySchema = new mongoose.Schema({
    //  fields: name, product ko refer karega
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// models
export const Category = mongoose.model("Category", categorySchema);