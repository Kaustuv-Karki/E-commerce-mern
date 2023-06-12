import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        //validations
        if (!name) {
            return res.send({ error: "Name must be provided" });
        }
        if (!email) {
            return res.send({ error: "Email must be provided" });
        }
        if (!password) {
            return res.send({ error: "Password must be provided" });
        }
        if (!phone) {
            return res.send({ error: "Phone number must be provided" });
        }
        if (!address) {
            return res.send({ error: "Address must be provided" });
        }

        //check existing users
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: "User Aliready Registered Please Login",
            });
        }

        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        }).save();
        res.status(200).send({
            success: true,
            message: "User Registered Successfully",
            user,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error,
        });
    }
};

// POST LOGIN

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid Email or Password",
            });
        }

        //check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res
                .status(404)
                .send({ success: false, message: "User not found" });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res
                .staus(200)
                .send({ success: false, message: "Invalid password" });
        }

        // token
        const token = await JWT.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).send({
            success: true,
            message: "Login Successful",
            user: {
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
            },
            token,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            success: false,
            message: "Login Error",
            error,
        });
    }
};

//test controller

export const testController = async (req, res) => {
    res.send({ message: "This is correct" });
};
