import React from "react";

const Input = ({ field, type, value, handleChange, label }) => (
    <div className="form-group">
    <label htmlFor={field}>{label}</label>
    <input className="form-control"
           id={field}
           name={field}
           type={type}
           value={ value }
           onChange={handleChange} />
    </div>
);

export default Input;