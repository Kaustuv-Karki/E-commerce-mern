import React from "react";
import Layout from "../components/Layout/Layout";
import image from "../assets/About.jpg";

const About = () => {
    return (
        <Layout>
            <div className="contactus" style={{ padding: "5rem" }}>
                <h1 className="bg-dark text-white p-2">ABOUT US</h1>
                <img className="aboutimage" src={image} alt="about" />
                <p className="mt-3" style={{ width: "30rem" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magni nam amet eius error recusandae soluta minus obcaecati,
                    saepe nobis voluptatibus. Quis ipsum molestiae hic fuga
                    nobis sit dolore aspernatur vero.
                </p>
            </div>
        </Layout>
    );
};

export default About;
