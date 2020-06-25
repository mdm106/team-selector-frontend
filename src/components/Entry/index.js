import { connect } from "react-redux";

import Entry from "./Entry";
import { updateEntries } from "../../data/actions/state";
import history from "../../history";

const mapStateToProps = ({ teamSize, abilityPick, players, reEntry }) => {
    return {
        teamSize,
        abilityPick,
        players,
        reEntry
    };
};


const mapDispatchToProps = dispatch => {
    return {
        handleNameEntries: data => {
            dispatch(updateEntries(data)); 
            
            //go to selection results page
            history.push("/team-selection");
        },
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);