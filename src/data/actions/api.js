import axios from "../../axios";
import history from "../../history";

import { saveTeamNames, saveGames } from "./state";

export const getTeamNames = () => {
    return (dispatch) => {
        return axios.get("/team-names/random").then(({ data }) => {
            dispatch(saveTeamNames(data.data));
        })
    }
}

export const getGames = () => {
    return (dispatch) => {
        return axios.get("/games").then(({ data }) => {
            dispatch(saveGames(data.data));
        })
    }
}

export const postGame = ({ gameDate, team1Name, team2Name, team1Score, team2Score, gameComplete }) => {
    return (dispatch) => {
        axios.post("/games", {
            game_date: gameDate,
            team_1: team1Name,
            team_2: team2Name,
            team_1_score: +team1Score,
            team_2_score: +team2Score,
            game_complete: gameComplete,
        }).then(() => {
            history.push("/game-saved")
        })
    }
}

export const putGame = ({ gameDate, team1Name, team2Name, team1Score, team2Score, gameComplete }, id) => {
    return (dispatch) => {
        axios.put(`/games/${id}`, {
            game_date: gameDate,
            team_1: team1Name,
            team_2: team2Name,
            team_1_score: +team1Score,
            team_2_score: +team2Score,
            game_complete: gameComplete,
        }).then(() => {
            history.push("/game-saved")
        })
    }
}