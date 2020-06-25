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

const savePlayersReducer = (state, { randomisedTeams, equalisedTeams, players }) => {
        
    let notFifty = randomisedTeams.filter(player => player.ability !== 50);

    return {
        ...state,
        players: players,
        teams: (!state.abilityPick || notFifty.length === 0) ? randomisedTeams : equalisedTeams,
    }
}

const resetReducer = (state) => {
    return {
        ...initial,
    }
}

const saveNamesReducer = (state, {team1Name, team2Name }) => {
    return {
        ...state,
        team1Name,
        team2Name,
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "SAVE_SETTINGS": return saveSettingsReducer(state, action);
        case "SAVE_PLAYERS": return savePlayersReducer(state, action);
        case "SAVE_NAMES": return saveNamesReducer(state, action);
        case "RESET": return resetReducer(state);
        default: return state;
    }
}

export default reducer;