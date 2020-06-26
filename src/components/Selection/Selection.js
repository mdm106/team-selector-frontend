import React from "react";
import { Link } from "react-router-dom";

import Reset from "../Reset";
import Button from "../Buttons/Button";
import Copy from "../Copy";

const Selection = ({ team1Name, team2Name, teams, abilityPick, handleAmend }) => {

    return (
        <div className="container">
        <h2>Your team selection is:</h2>
            {teams.map((team, index) => (
                <div key={ index } className="card">
                <ul className="list-group">
                    <h3 className="card-title">{index === 0 ? team1Name : team2Name}</h3>
                </ul>
                {team.map((player, index) => (
                    <li className="list-group-item" key={ index }>
                        <p className="list-group-item-text">{player.name}</p>
                        {abilityPick ?
                        <p className="list-group-item-text">Ability: {player.ability}/100</p>
                        : null }
                    </li>
                ))}
                {abilityPick ? <p className="average-info">Average ability: {(team.reduce((total, player) => total + player.ability, 0) / team.length).toFixed(1) }</p> : null }
                </div>
            ))}
        <div className="adjacent-buttons">
            <Button message={"Amend player details"}
                    onClick={ handleAmend } />
            <Reset /> 
        </div>
        <div className="adjacent-buttons">
            <Copy />
            <Link to={`/game-details`}>
                <p className="btn btn-primary">Save game details</p>
            </Link>
        </div>
        </div>
    );
};

export default Selection;
