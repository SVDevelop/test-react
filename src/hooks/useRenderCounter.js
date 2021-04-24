import { useState, useRef, useEffect } from "react";

export default function useRenderCounter() {
  const ref = useRef(0);
  useEffect(() => ref.current++);
  return ref.current;
}
