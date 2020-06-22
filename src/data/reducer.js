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

// comparator helper function for sorting array of objects by property
let comparator = (a, b) => {
    let abilityA = a.ability;
    let abilityB = b.ability;

    let comparison = 0;
    if (abilityA > abilityB) {
        comparison = 1;
    } else if (abilityA < abilityB) {
        comparison = -1;
    }
    return comparison;
}

// helper function to produce arrays of roughly equal sum
let equalise = (array) => {
    array.sort(comparator);
    let setSize = array.length/2;
    let pos1 = 0;
    let pos2 = 0;
    let i = array.length-1;

    let sum1 = 0;
    let sum2 = 0; 

    let team1 = [];
    let team2 =[];
    while (pos1 < setSize && pos2 < setSize) {
        if (sum1 < sum2) {
           team1[pos1] = array[i];
           pos1 += 1;
           sum1 += array[i].ability; 
        }
        else {
            team2[pos2] = array[i];
            pos2 += 1;
            sum2 += array[i].ability;
        }
        i -= 1;
    }

    if(team1.length < setSize) {
        team1 = array.filter(val => !team2.includes(val));
    } else if (team2.length < setSize) {
        team2 = array.filter(val => !team1.includes(val));
    }

    let bothteams = [team1, team2];

    return bothteams;
}

const savePlayersReducer = (state, { playerNames, playerAbilities, totalPlayers, abilityPick }) => {
    let players = makePlayers(totalPlayers, playerNames, playerAbilities);

    let teams = [];

    let notFifty = players.filter(player => player.ability !== 50);

    if( !state.abilityPick || notFifty.length === 0) {
        let shuffledPlayers = shuffleArray(players);
        let team1 = shuffledPlayers.filter((_, i) => i % 2 === 0);
        let team2 = shuffledPlayers.filter((_, i) => i % 2 !== 0);
        teams = [team1, team2]
    } else {
        teams = equalise(players);
    }
    
    return {
        ...state,
        players: players,
        teams: teams,
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