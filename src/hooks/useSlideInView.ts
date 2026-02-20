import { useState, useEffect } from "react";

export function useSlideInView(isActive: boolean, delay: number = 0) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isActive, delay]);

  return visible;
}
