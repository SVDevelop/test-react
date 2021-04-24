import { useState, useEffect, useContext } from "react";

export default function useCounter(v) {
  const [counter, setCounter] = useState(0);
  const count = () => setCounter(counter + 1);
  return { count, counter };
}
