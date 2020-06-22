export const saveSettings = ({ team1Name, team2Name, teamSize, abilityPick }) => {
    return {
        type: "SAVE_SETTINGS",
        team1Name,
        team2Name,
        teamSize: +teamSize, //to ensure teamSize is a number
        abilityPick,
    };
}

export const updateEntries = ({ playerNames, playerAbilities, totalPlayers }) => {
    return {
        type: "SAVE_PLAYERS",
        playerNames,
        playerAbilities,
        totalPlayers,
    };
}

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const saveTeamNames = (data) => {
    return {
        type: "SAVE_NAMES",
        team1Name: data[0].name,
        team2Name: data[1].name,
    };
};