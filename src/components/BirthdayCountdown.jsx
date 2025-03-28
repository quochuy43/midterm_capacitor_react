import React from "react";
import InputField from "./InputField";
const BirthdayCountdown = ({ birthDate, setBirthDate, onCalculate }) => {
    return (
        <div className="birthday-countdown">
            <InputField
                label="Ngày sinh (dd/mm):"
                value={birthDate}
                onChange={setBirthDate}
                placeholder="Ví dụ: 25/12"
            />
            <button onClick={onCalculate}>Tính thời gian còn lại</button>
        </div>
    )
}
export default BirthdayCountdown;