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