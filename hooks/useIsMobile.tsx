import { useState, useEffect, useCallback } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const resizeListener = useCallback(() => {
    setIsMobile(window.matchMedia(`(max-width: 954px`).matches);
  }, []);

  useEffect(() => {
    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [resizeListener]);

  return isMobile;
};
