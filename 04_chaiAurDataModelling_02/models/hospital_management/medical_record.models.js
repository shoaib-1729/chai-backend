import mongoose from "mongoose";

// schema
const medicalRecordSchema = new mongoose.Schema({
    // fields: recordName, recordHistory, belongsToPatient, diagnoseWith, underDoctor
    recordName: {
        type: String,
        required: true,
    },
    recordHistory: [{
        date: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    belongsToPatient: {
        // refer to patient schema
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    underDoctor: {
        // refer to doctor schema
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
}, { timestamps: true });

// model
export const MedicalRecord = mongoose.model(
    "MedicalRecord",
    medicalRecordSchema
);