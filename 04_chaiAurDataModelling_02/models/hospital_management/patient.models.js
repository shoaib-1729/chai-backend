import mongoose from "mongoose";

// schema
const patientSchema = new mongoose.Schema({
    // fields: name, diagnosedWith, age, address, bloodGroup, gender (enums use kar sakte hai ismei)
    // data models kaise bhi ho sakte hai, depends on the type opf project and its complexity
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: Number,
        required: true
    },
    bloodGroup: {
        // blood group is very important field jaha hospital related software ki baat aa jaati hai
        // yaha bhi enum ka use kar sakte hai agar specifically pata ho ki yaha blood group hone waale hai
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    }

}, { timestamps: true });

// model
export const Patient = mongoose.model("Patient", patientSchema);