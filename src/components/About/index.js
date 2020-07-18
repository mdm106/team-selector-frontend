import { connect } from "react-redux";

import About from "./About";
import history from "../../history";

import { resetSettings } from "../../data/actions/state";

const mapDispatchToProps = dispatch => {
    return {
        handleStart: () => {
            dispatch(resetSettings());
            
            //go to selection results page
            history.push("/team-details");
        },
    }; 
};


export default connect(null, mapDispatchToProps)(About);