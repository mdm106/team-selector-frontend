/*HELPER FUNCTIONS*/
///to make array of player objects
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

/// to randomly shuffle an array, using Fishers-Yates Algorithm
let randomTeams = (array) => {
    for(let i = array.length -1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
    }
    let team1 = array.filter((_, i) => i % 2 === 0);
    let team2 = array.filter((_, i) => i % 2 !== 0);
    return [team1, team2];
}

// to produce arrays of roughly equal sum
let equalTeams = (array) => {
    //sort players in ascending order by ability
    array.sort((a,b) => a.ability - b.ability);
    //set size of teams as half of total number of players in array
    let setSize = array.length/2;
   
    let pos1 = 0;
    let pos2 = 0;
    //set i as the highest index in array
    let i = array.length-1;
   
    let sum1 = 0;
    let sum2 = 0; 
    
    let team1 = [];
    let team2 =[];
    //i is increased each time to move down the array of players to assign, and if sum1 is lower than sum2, team1 is assigned the next player, otherwise team2 is assigned it
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
    //if the while has stopped when either team is not the correct size, all values that have not been assigned to the other team are filtered from original array and assigned to the team to bring them up to full quota
    if(team1.length < setSize) {
        team1 = array.filter(val => !team2.includes(val));
    } else if (team2.length < setSize) {
        team2 = array.filter(val => !team1.includes(val));
    }
    
    return [team1, team2]
}

/*Action creators*/

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
    let players = makePlayers(totalPlayers, playerNames, playerAbilities);
    return {
        type: "SAVE_PLAYERS",
        randomisedTeams: randomTeams(players),
        equalisedTeams: equalTeams(players),
        players: players.sort((a,b) => a.id - b.id), // to ensure players are in the correct order if user returns to form to amend details
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

export const amendEntries = () => {
    return {
        type: "AMEND_ENTRIES",
    }
}

export const resetSettings = () => {
    return {
        type: "RESET",
    }
}

export const saveGames = (data) => {
    return {
        type: "SAVE_GAMES",
        games: data,
    };
};