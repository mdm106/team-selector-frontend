import { connect } from "react-redux";

import Entry from "./Entry";
import { updateEntries } from "../../data/actions/state";

const mapStateToProps = ({ teamSize, abilityPick }) => {
    return {
        teamSize,
        abilityPick
    };
};


const mapDispatchToProps = dispatch => {
    return {
        handleNameEntries: data => {
            dispatch(updateEntries(data));            
        },
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);