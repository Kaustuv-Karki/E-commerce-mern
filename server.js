import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

// database configuration
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send({
        message: "Welcome to E-commerce App",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});
