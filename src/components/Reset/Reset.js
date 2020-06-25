import React from "react";

const Reset = ({ handleReset }) => (
        <button className="btn btn-danger"
                onClick={ handleReset }>
            Start again
        </button>
    );

export default Reset;