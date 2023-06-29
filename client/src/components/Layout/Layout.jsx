import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, description, keywords, title, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta charSet="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "80vh" }}>
                <ToastContainer />
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: "Online Shopping In Ecommerce App",
    description: "Mern stack Project",
    keywords: "mern, react, dynamic, node, mongodb",
    author: "Kaustuv Karki",
};

export default Layout;
