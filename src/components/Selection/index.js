import { connect } from "react-redux";

import Selection from "./Selection";
import { amendEntries } from "../../data/actions/state";
import history from "../../history";

const mapStateToProps = ({ team1Name, team2Name, teams, abilityPick }) => {
    return {
        team1Name,
        team2Name,
        teams,
        abilityPick,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleAmend: () => {
            dispatch(amendEntries());

            //go to name entry page
            history.push("/name-entry");
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);