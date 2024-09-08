// yaha bas db connection ka code hoga, baaki kuch nahi
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        // db connect
        // mongoose connect api returns a promise when resolved (refer mongoose docs)
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(`
            MongoDB connected successfully!
            ------------------------------
            DB Host: ${connectionInstance.connection.host}
            `);
    } catch (error) {
        console.error(`
            MongoDB Connection Failed!
            ---------------------------
            Error: ${error.message}
            `);
        // exit the code using process exit method in nodejs
        process.exit(1);
    }
};
// ek hi function export karwana hai, toh default export karwa do
export default connectDB;