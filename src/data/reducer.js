import initial from "./initial";

const saveSettingsReducer = (state, 
    {team1Name,
    team2Name,
    teamSize,
    abilityPick }) => {
        return {
            ...initial,
            team1Name,
            team2Name,
            teamSize,
            abilityPick,
        }
    }

    ///helper function to take the totalPlayers, playerNames and playerAbilities arrays from local state after form completion and make them into an array of objects for use in global state. This function is called within the savePlayersReducer
let makePlayers = (keys, names, abilities) => {
    let newArray = [];

    for (let i = 0; i < keys.length; i ++) {
        let object = {
            id: keys[i],
            name: names[i],
            ability: abilities[i],
        }
        newArray.push(object);
    }
    return newArray;
}

const savePlayersReducer = (state, { playerNames, playerAbilities, totalPlayers }) => {
    return {
        ...state,
        players: makePlayers(totalPlayers, playerNames, playerAbilities),
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SAVE_SETTINGS": return saveSettingsReducer(state, action);
        case "SAVE_PLAYERS": return savePlayersReducer(state, action);
        default: return state;
    }
}

export default reducer;