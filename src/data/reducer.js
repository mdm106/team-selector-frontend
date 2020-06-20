const saveSettingsReducer = (state, 
    {team1Name,
    team2Name,
    teamSize,
    abilityPick }) => {
        return {
            ...state,
            team1Name,
            team2Name,
            teamSize,
            abilityPick,
        }
    }

const reducer = (state, action) => {
    switch (action.type) {
        case "SAVE_SETTINGS": return saveSettingsReducer(state, action);
        default: return state;
    }
}

export default reducer;