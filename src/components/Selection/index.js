import { connect } from "react-redux";

import Selection from "./Selection";

const mapStateToProps = ({ team1Name, team2Name, abilityPick, players, teamSize }) => {
    return {
        team1Name,
        team2Name,
        abilityPick,
        players,
        teamSize
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);