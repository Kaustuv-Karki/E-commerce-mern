import React from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {
    return (
        <Layout title="Register Yourself">
            <div className="register">
                <h1>Register Page</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
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
