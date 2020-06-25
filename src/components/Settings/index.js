import { connect } from "react-redux";

import Settings from "./Settings";
import { saveSettings, resetSettings } from "../../data/actions/state";
import { getTeamNames } from "../../data/actions/api";
import history from "../../history";

const mapStateToProps = ({ team1Name, team2Name, teamSize, abilityPick }) => {
    return {
        team1Name,
        team2Name,
        teamSize,
        abilityPick
    };
};


const mapDispatchToProps = dispatch => {
    return {
        handleSave: value => {
            dispatch(saveSettings(value));

            //go to name entry page
            history.push("/name-entry");
        },
        handleTeamName: () => dispatch(getTeamNames()),
        handleFormReset: () => dispatch(resetSettings())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);