import React from "react";
import { sendLocalNotification, shareResult } from "../services/capacitorService";
import BatteryStatus from "./BatteryStatus";

const ResultDisplay = ({ daysLeft }) => {
    React.useEffect(() => {
        sendLocalNotification(daysLeft)
    }, [daysLeft])

    const handleShare = () => {
        shareResult(daysLeft)
    }

    return (
        <div className="result-display">
            <h2>Kết quả:</h2>
            <p>Còn {daysLeft} ngày nữa là đến sinh nhật của bạn!</p>
            <div className="actions">
                <button onClick={handleShare}>Chia sẻ kết quả</button>
            </div>
            <BatteryStatus />
        </div>
    )
}

export default ResultDisplay