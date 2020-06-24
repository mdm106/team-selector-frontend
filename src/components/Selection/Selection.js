import React from "react";
import Reset from "../Reset";

const Selection = ({ team1Name, team2Name, teams, abilityPick }) => {

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
                        <p className="list-item-name">{player.name}</p>
                        {abilityPick ?
                        <p className="list-item-ability">Ability: {player.ability}/100</p>
                        : null }
                    </li>
                ))}
                {abilityPick ? <p>Average ability: {(team.reduce((total, player) => total + player.ability, 0) / team.length).toFixed(1) }</p> : null }
                </div>
            ))}
        <Reset />
        </div>
    );
};

export default Selection;