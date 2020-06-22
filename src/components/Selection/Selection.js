import React from "react";

const Selection = ({ team1Name, team2Name, teams, abilityPick }) => {

    return (
        <>
        <h2>Your team selection is:</h2>
            {teams.map((value, index) => (
                <div key={ index } className="container">
                <li>{index === 0 ? team1Name : team2Name}</li>
                {value.map((player, index) => (
                    <li key={ index }>
                        <p>Name: {player.name}</p>
                        {abilityPick ?
                        <p>Ability: {player.ability}/100</p>
                        : null }
                    </li>
                ))}
                </div>
            ))}
        </>
    );
};

export default Selection;