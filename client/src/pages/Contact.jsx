import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
    return (
        <Layout>
            <div className="contactus">
                <h1 className="bg-dark text-white p-2">CONTACT US</h1>
                <p className="mt-3">
                    If any queries feel free to call we are available 24-7
                </p>
                <p className="">
                    <BiMailSend /> : ecommerce@gmail.com
                </p>
                <p className="">
                    <BiPhoneCall /> : 01-12345678
                </p>
                <p className="">
                    <BiSupport /> : 0101-0101-1000
                </p>
            </div>
        </Layout>
    );
};

export default Contact;
