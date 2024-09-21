import { useEffect, useState } from "react"

export function useDeviceType() {
    const [deviceType, setDeviceType] = useState<DeviceType>(null)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [width])

    useEffect(() => {
        if (width >= 1280) {
            setDeviceType('desktop')
        } else if (width >= 640) {
            setDeviceType('tablet')
        } else {
            setDeviceType('mobile')
        }
    }, [width])

    return deviceType
}