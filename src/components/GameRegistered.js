import React from "react";
import { Link } from "react-router-dom";


const GameRegistered = () => (
    <div className="container">
        <h1>Your game has been saved!</h1>
        <h2 className="titleFont contrastHeading">View game history (link to history when available)</h2>
        <Link to={`/`}>
            <div className="central-button">
                <p className="btn btn-primary">Take me home</p>
            </div>
        </Link>
    </div>
)

export default GameRegistered;