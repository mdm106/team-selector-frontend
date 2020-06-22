import axios from "../../axios";

import { saveTeamNames } from "./state";

export const getTeamNames = () => {
    return (dispatch) => {
        return axios.get(`/team-names/random`).then(({ data }) => {
            dispatch(saveTeamNames(data.data));
        })
    }
}