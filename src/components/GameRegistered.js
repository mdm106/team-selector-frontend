import React from "react";
import { Link } from "react-router-dom";


const GameRegistered = () => (
    <div className="container">
        <h1>Your game has been saved!</h1>
        <div className="adjacent-buttons">
            <Link to={`/`}>
                    <p className="btn btn-primary">Take me home</p>
            </Link>
            <Link to={`/game-history`}>
                <p className="btn btn-danger">View previous game details</p>
            </Link>
        </div>
    </div>
)

export default GameRegistered;