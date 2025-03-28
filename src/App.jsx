import React, { useState } from "react";
import './App.css'
import { calculateDaysUntilBirthday } from "./services/capacitorService";
import BirthdayCountdown from "./components/BirthdayCountdown";
import ResultDisplay from "./components/ResultDisplay";

function App() {
    const [birthDate, setBirthDate] = useState('')
    const [daysLeft, setDaysLeft] = useState(null)

    const handleCalculate = () => {
        const result = calculateDaysUntilBirthday(birthDate)
        if (result !== null) {
            setDaysLeft(result)
        }
    }

    return (
        <div className="App">
            <h1>Đếm ngược sinh nhật</h1>
            <BirthdayCountdown
                birthDate={birthDate}
                setBirthDate={setBirthDate}
                onCalculate={handleCalculate}
            />
            {daysLeft !== null && <ResultDisplay daysLeft={daysLeft} />}
        </div>
    )
}

export default App