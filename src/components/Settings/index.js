import { connect } from "react-redux";

import Settings from "./Settings";
import { saveSettings } from "../../data/actions/state";
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);