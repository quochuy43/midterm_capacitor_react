import { Device } from "@capacitor/device"
import { LocalNotifications } from "@capacitor/local-notifications"
import { Share } from "@capacitor/share"

export const calculateDaysUntilBirthday = (birthDate) => {
    if (!birthDate || !/^\d{2}\/\d{2}$/.test(birthDate)) {
        alert('Vui lòng nhập ngày sinh hợp lệ (dd/mm)!')
        return null
    }

    const [day, month] = birthDate.split('/').map(Number)
    const today = new Date()
    const currentYear = today.getFullYear()

    let nextBirthday = new Date(currentYear, month - 1, day)

    if (nextBirthday < today) {
        nextBirthday = new Date(currentYear + 1, month - 1, day)
    }

    const timeDiff = nextBirthday - today
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    return daysLeft
}

export const sendLocalNotification = async (daysLeft) => {
    await LocalNotifications.schedule({
        notifications: [
            {
                title: 'Đếm ngược sinh nhật',
                body: `Còn ${daysLeft} ngày nữa là đến sinh nhật của bạn!`,
                id: 1,
                schedule: { at: new Date(Date.now() + 1000) },
            }
        ]
    })
}

export const shareResult = async (daysLeft) => {
    if (!daysLeft) return
    await Share.share({
        title: 'Đếm ngược sinh nhật',
        text: `Còn ${daysLeft} ngày nữa là đến sinh nhật của tôi! Hãy chức mừng tôi qua tin nhắn ở kênh tik tok này nhé!`,
        url: 'https://www.tiktok.com/@wuvwy0403',
        dialogTitle: 'Chia sẻ đếm ngược sinh nhật',
    })
}

export const getBatteryStatus = async () => {
    const batteryInfo = await Device.getBatteryInfo()
    return {
        level: batteryInfo.batteryLevel * 100,
        isCharging: batteryInfo.isCharging
    }
}