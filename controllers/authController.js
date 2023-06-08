import { hashPassword } from "../helpers/authHelper.js";
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
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error,
        });
    }
};
