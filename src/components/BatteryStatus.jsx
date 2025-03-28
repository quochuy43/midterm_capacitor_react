import React, { useEffect, useState } from "react";
import { getBatteryStatus } from "../services/capacitorService";

const BatteryStatus = () => {
    const [batteryInfo, setBatteryInfo] = useState({
        level: 0,
        isCharging: false
    })

    useEffect(() => {
        const fetchBatteryStatus = async () => {
            const info = await getBatteryStatus()
            setBatteryInfo(info)
        }
        fetchBatteryStatus()
    }, [])

    return (
        <div className="battery-status">
            <h3>Trạng thái pin:</h3>
            <p>Mức pin: {batteryInfo.level}%</p>
            <p>{batteryInfo.isCharging ? 'Đang sạc' : 'Không sạc'}</p>
        </div>
    );
}
export default BatteryStatus