import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// configuring cors (middleware)
// generally configuration settings, validation are done using middlewares, middlewares generally uses use() method inside our app
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);
// configuration settings for response inside express, refer express docs

// Middleware to parse JSON bodies
app.use(
    express.json({
        limit: "16kb",
    })
);
app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);
app.use(express.static("public"));
app.use(cookieParser());
// named export
export { app };