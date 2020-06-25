import { connect } from "react-redux";

import Copy from "./Copy";

const mapStateToProps = ({ team1Name, team2Name, teams }) => {
    return {
        team1Name,
        team2Name,
        teams,
    };
};


export default connect(mapStateToProps)(Copy);