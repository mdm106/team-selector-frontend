import React from "react";
import { Link } from "react-router-dom";

const About = () => (
    <div className="container">
        <h5>Team Selector helps you quickly and fairly pick your teams. Less time organising, more time winning.</h5>
        <br/>
            <ul className="about-list">
            <h5>Features include:</h5>
                <li>Team name generator to randomly assign your teams with fun names</li>
                <li>Selection for team sizes ranging from 5-a-side up to 11-a-side</li>
                <li>Random selection of teams</li>
                <li>Option to provide player ability scores for balanced team selection</li>
                <li>Copy feature so that you can easily copy the team details to paste into email, text messages etc</li>      
            </ul>
        <Link to={`/team-details`}>
            <div className="start-link">
                <p className="btn btn-primary">Get started</p>
            </div>
        </Link>
    </div>
);

export default About;