import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/v1/auth/register`, {
                userName,
                email,
                password,
                phone,
                address,
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
        toast.success("Registered Successfully!");
    };

    return (
        <Layout title="Register Yourself">
            <div className="register" style={{ paddingTop: "-2rem" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "4rem" }}>
                    Register Page
                </h1>
                <form
                    style={{ minWidth: "20rem" }}
                    className="register-form"
                    onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            value={userName}
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Username"
                            onChange={(e) => setuserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                            className="form-control"
                            id="exampleInputNumber"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            className="form-control"
                            id="exampleInputAddress"
                            placeholder="Address"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
