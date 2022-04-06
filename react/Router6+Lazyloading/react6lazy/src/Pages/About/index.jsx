import { Link } from "react-router-dom";
import React from "react";

export default function About() {
    return (
        <div>
            <h1>Page About</h1>
            <Link to="/">Go to Homepage</Link> <br />
            <Link to="/favorites">Click to see our favorites</Link>
        </div>
    )
}