import mongoose from "mongoose";

// schema
const hospitalSchema = new mongoose.Schema({
    // field: name, address1, address2, state, city, pincode, specializedIn
    name: {
        type: String,
        required: true,
    },
    // pehla wala address field required kardo, dusra wala optional kardo, generally yahi approach follow hoti hai jab 2 addresses liye jaate hai user/patient se.
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    city: {
        name: String,
        required: true,
    },
    pincode: {
        // pincode string mei lena better hai, kyuki international aspects se dekha jaaye toh kuch countries ke pincode mei alphabets bhi include hote hai with numbers
        name: String,
        required: true,
    },
    // speciality of a hospital mutiple value hold la sakti hai, isko ek array bana do
    specializedIn: [{
        type: String,
    }, ],
}, { timestamps: true });

// model
export const Hospital = mongoose.model("Hospital", hospitalSchema);