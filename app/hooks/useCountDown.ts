"use client";

import { useEffect, useState } from "react";

export function useCountdown(targetDate: string) {
  const target = new Date(targetDate).getTime();

  // Initialize to 0 on first render (SSR safe)
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Update immediately on client
    const update = () => setTimeLeft(Math.max(target - Date.now(), 0));
    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [target]);

  // Always return object — avoids null / conditional returns
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
}
