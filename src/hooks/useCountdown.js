import { useEffect, useState } from "react";

export default function useCountdown(targetDate) {
    const [time, setTime] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const diff = new Date(targetDate) - new Date();

            setTime({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor(diff / (1000 * 60 * 60) % 24),
                minutes: Math.floor(diff / (1000 * 60) % 60),
                seconds: Math.floor(diff / 1000 % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return time;
}