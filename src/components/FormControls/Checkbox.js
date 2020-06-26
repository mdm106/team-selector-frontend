import React from "react";

const Checkbox = ({ groupClass, label,  field, checked, handleChange, }) => (
    <div className={groupClass}>
        <label>
            {label}
            <input
                name={field}
                type="checkbox"
                checked={checked}
                onChange={handleChange} />
        </label>
    </div>
);

Input.defaultProps = {
    groupClass: "form-check",
}

export default Checkbox;