import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="container">
            <h1>#todo</h1>
            <div className="header-center">
                <Link to="/" className="h-c-title">
                    All
                </Link>
                <Link to="/Active" className="h-c-title">
                    Active
                </Link>
                <Link to="/Completed" className="h-c-title">
                    Completed
                </Link>
            </div>
        </div>
    );
};

export default Header;
