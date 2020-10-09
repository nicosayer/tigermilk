import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize < 769;
};
