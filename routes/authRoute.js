import express from "express";
import {
    loginController,
    registerController,
} from "../controllers/authController.js";

//router

const router = express.Router();

// ReGISTER
router.post("/register", registerController);

// LOGIN
router.post("/login", loginController);

export default router;
