import { connect } from "react-redux";

import GameForm from "./GameForm";
import { postGame } from "../../data/actions/api";

const mapStateToProps = ({ team1Name, team2Name }) => {
    return {
        team1Name,
        team2Name,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleGameSave: data => {
            dispatch(postGame(data));            
        },
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);