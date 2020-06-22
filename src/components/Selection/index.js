import { connect } from "react-redux";

import Selection from "./Selection";

const mapStateToProps = ({ team1Name, team2Name, teams, abilityPick }) => {
    return {
        team1Name,
        team2Name,
        teams,
        abilityPick,
    };
};

export default connect(mapStateToProps)(Selection);