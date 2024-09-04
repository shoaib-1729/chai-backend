import mongoose from "mongoose";

const numberOfHoursSchema = new mongoose.Schema({
    // fields: doctor, hospital, numberOfHours
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    workHours: {
        type: String,
        required: true,
        default: 0,
    },
});

// schema
const doctorSchema = new mongoose.Schema({
    // field: name, salary, qualification, experienceInYears, worksInHospital (ek doctor multiple hospitals mei kaam kar sakta hai)
    // numberOfHours: ek doctor kis hospital mei kitne hours kaam kar raha hai
    name: {
        type: String,
        required: true,
    },
    salary: {
        // may be aage currency lagani pade, isiliye String mei rakhna better hai, Number may be rakh sakte hai, depend karta hai aap kaise store karana chahte ho
        type: String,
        required: true,
    },
    experienceInYears: {
        type: String,
        required: true,
        // agar experience nahi mention hai, toh default zero lelo.
        default: 0,
    },
    // is field mei multiple values hogi, isiliye yeh ek array hoga, jismei har object ka schema define karege
    workInHospital: [{
        type: String,
    }, ],
    // doctor kis hospital mei kitne hours kaam kar raha hai, yeh bhi ek field ho sakti hai
    hoursWorked: {
        type: [numberOfHoursSchema],
    },
    /*
    approach-2 without defining sub-models/sub-documents
    hoursWorked: [{
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
        },
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
        workHours: {
            type: String,
            required: true,
            default: 0,
        },
    }]
        */
}, { timestamps: true });

// model
export const Doctor = mongoose.model("Doctor", doctorSchema);