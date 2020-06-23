import React from "react";

const Button = ({ type, className, onClick, message, disabled }) => (
    <button 
    type={type}
    className={`btn btn-${className}`}
    onClick={onClick}
    disabled={disabled}>
    {message}</button>
);

Button.defaultProps = {
    type: "button",
    className: "btn btn-primary",
    disabled: false,
}

export default Button;

