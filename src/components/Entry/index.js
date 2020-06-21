import { connect } from "react-redux";

import Entry from "./Registration";
import { updateEntries } from "../../data/actions/state";

const mapStateToProps = ({ teamSize }) => {
    return {
        teamSize
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