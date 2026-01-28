import { useEffect, useState } from "react";

export function useCountdown(targetDate: string) {
  const target = new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(target - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
}
