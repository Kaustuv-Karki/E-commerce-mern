import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {
    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <Layout title="Register Yourself">
            <div className="register" style={{ paddingTop: "-2rem" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "4rem" }}>
                    Register Page
                </h1>
                <form style={{ minWidth: "20rem" }} className="register-form">
                    <div className="form-group">
                        <input
                            type="text"
                            value={userName}
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Username"
                            onChange={(e) => setuserName(e.target.value)}
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
                            id="exampleInputName"
                            placeholder="Phone Number"
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
