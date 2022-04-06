import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
    return (
        <div>
            <h1>Page Home</h1>
            <Link to="/favorites">Click to see our favorites</Link> <br />
            <Link to="/about">Click to see about us</Link>
        </div>
    )
}