import { connect } from "react-redux";

import Reset from "./Reset";
import { reset } from "../../data/actions/state";

import history from "../../history";

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => {
            dispatch(reset()); 
            
            //go to team details form
            history.push("/team-details");
        },
    }; 
};

export default connect(null, mapDispatchToProps)(Reset);