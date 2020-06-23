import React from "react";

const Input = ({ field, type, value, handleChange, label, inputClass }) => (
    <div className="form-group">
    <label htmlFor={field}>{label}</label>
    <input className={inputClass}
           id={field}
           name={field}
           type={type}
           value={ value }
           onChange={handleChange} />
    </div>
);

Input.defaultProps = {
    inputClass: "form-control",
}

export default Input;