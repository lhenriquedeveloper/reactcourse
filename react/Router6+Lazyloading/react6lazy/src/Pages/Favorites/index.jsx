import { Link } from "react-router-dom";
import React from "react";
export default function Favorites() {
    return (
        <div>
            <h1>Page Favorites</h1>
            <Link to="/">Go to Homepage</Link> <br />
            <Link to="/about">Click to see about us</Link>
        </div>
    )
}