import { useState, useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  duration: number = 2000,
  startOnMount: boolean = false,
  decimals: number = 0
) {
  const [value, setValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const rafRef = useRef<number>();

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = eased * target;

      setValue(Number(current.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
        setIsRunning(false);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) start();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startOnMount]);

  return { value, start, isRunning };
}
