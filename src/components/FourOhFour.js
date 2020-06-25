import React from "react";
import { Link } from "react-router-dom";


const FourOhFour = () => (
    <div className="container">
        <h1>Whoops!</h1>
        <h2 className="titleFont contrastHeading">Something went wrong..</h2>
        <Link to={`/`}>
            <div className="start-link">
                <p className="btn btn-primary">Take me home</p>
            </div>
        </Link>
    </div>
)

export default FourOhFour;