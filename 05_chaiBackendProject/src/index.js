// require("dotenv").config({
//     path: "./env",
// });
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

// dotenv config
dotenv.config({
    path: "./env",
});
// server using express, db connect using mongoose

// a function to connect to the DB, jo ki export karayege
connectDB();

// setting up express app
const app = express();

app.get("/", (req, res) => {
    res.send("Home Route");
});

// server listening for errors
app.on("error", (error) => {
    console.log("ERR: ", error);
    throw error;
});
// port
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on Port ${process.env.PORT}`);
});

/*(
// express app
const app = express();
// iife - db connect
// db server can be in another continent, hence always handle db connections using promises or async-await
// good coding practice for iife: start with semicolon i.e. [;(()=> {})()]
(async() => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
        );
        // server listening for errors
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error;
        });
        // port
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on Port ${process.env.PORT}`);
        });
    } catch (error) {
        // throw error
        console.error(error);
        throw error;
    }
})();
)*/

// Note: Remove the brackets and the multiline comment to uncomment the code.