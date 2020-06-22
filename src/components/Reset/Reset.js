import React from "react";

const Reset = ({ handleReset }) => (
        <button className="btn btn-danger"
                onClick={ handleReset }>
            Reset
        </button>
    );

export default Reset;