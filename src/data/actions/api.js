import axios from "../../axios";
import history from "../../history";

import { saveTeamNames } from "./state";

export const getTeamNames = () => {
    return (dispatch) => {
        return axios.get(`/team-names/random`).then(({ data }) => {
            dispatch(saveTeamNames(data.data));
        })
    }
}

export const postGame = ({ gameDate, team1Name, team2Name, team1Score, team2Score, gameComplete }) => {
    return (dispatch) => {
        axios.post("/games", {
            gameDate,
            team1Name,
            team2Name,
            team1Score,
            team2Score,
            gameComplete,
        }).then(() => {
            history.push("/game-registered")
        })
    }
}