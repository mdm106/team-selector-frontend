import { connect } from "react-redux";

import Selection from "./Selection";

const mapStateToProps = ({ team1Name, team2Name, team1, team2 }) => {
    return {
        team1Name,
        team2Name,
        team1,
        team2,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);