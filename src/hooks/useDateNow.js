import { useEffect, useState } from "react";

export default function useDateNow(timeout = 1000) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const flag = setInterval(() => setTime(new Date()), timeout);
    return () => clearInterval(flag);
  }, [timeout]);

  return time;
}
