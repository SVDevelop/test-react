import "./styles.css";

import { useState, useEffect, useContext } from "react";
import { useCounter, useDateNow } from "./hooks";
import useRenderCounter from "./hooks/useRenderCounter";

const { format } = new Intl.DateTimeFormat("ru-RU", {
  hour12: false,
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

export default function App() {
  const { counter, count } = useCounter();
  const now = useDateNow();
  const renderCounter = useRenderCounter();

  return (
    <div className="App">
      <button onClick={count}>На меня нажали {counter} раз.</button>
      <p>{format(now)}</p>
      <p>{format(now)}</p>
      <p>{format(now)}</p>
      <p>Страница обновилась {renderCounter} раз.</p>
    </div>
  );
}
