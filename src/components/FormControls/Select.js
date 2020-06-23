import React from "react";

const Select = ({ field, value, handleChange, label, options }) => (
    <div className="form-group">
    <label htmlFor={field}>{label}</label>
    <select className="form-control"
           id={field}
           name={field}
           value={ value }
           onChange={handleChange}>
    {options.map((option, index) => (
        <option value={option}>{option}</option>
    ))}
    </select>
    </div>
);

export default Select;