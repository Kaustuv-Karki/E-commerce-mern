import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary"
                data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <FiShoppingBag />
                        Ecommerce
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link"
                                    aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link">
                                    Category
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">
                                    SignUp
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mycart" className="nav-link">
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
