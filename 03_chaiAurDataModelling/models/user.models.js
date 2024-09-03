import mongoose from "mongoose";

// schema
const userSchema = mongoose.Schema({
    // username field
    // first approach
    //field : Type
    // userName: String
    // second approach
    /*
    field: {
        validations
}
    */
    userName: {
        // validations
        type: String,
        required: true,
        // ek hi username hoga ek user ka
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        // required: true,
        // we can pass array as well in required field (refer mongoose docs)
        required: [true, "password is required."],
    },
});

// model
export const User = mongoose.models("User", userSchema);