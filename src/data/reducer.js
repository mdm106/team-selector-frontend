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
            ability: +abilities[i], //+ used to make ability be numeric
        }
        newArray.push(object);
    }
    return newArray;
}

/// helper function to randomly shuffle an array, using Fishers-Yates Algorithm
let shuffleArray = (array) => {
    for(let i = array.length -1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
    }
    return array;
}

const savePlayersReducer = (state, { playerNames, playerAbilities, totalPlayers, abilityPick }) => {
    let players = makePlayers(totalPlayers, playerNames, playerAbilities);

    let team1 = [];
    let team2 = [];

    if(!abilityPick) {
        let shuffledPlayers = shuffleArray(players);
        team1 = shuffledPlayers.filter((_, i) => i % 2 === 0);
        team2 = shuffledPlayers.filter((_, i) => i % 2 !== 0);
    }
    return {
        ...state,
        players: players,
        team1: team1,
        team2: team2,
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