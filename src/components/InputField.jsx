import React from "react";
const InputField = ({ label, value, onChange, placeholder }) => {
    return (
        <div className="input-popup">
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}
export default InputField