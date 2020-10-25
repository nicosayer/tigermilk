import { Box } from "components/Box";
import { useEffect, useState } from "react";

export const Toast = ({ top, right, bottom, left, ...rest }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 500);
  }, []);

  return (
    <Box
      style={{
        opacity: opacity,
        transition: "opacity 0.5s ease-in",
        position: "fixed",
        top: top ? "20px" : undefined,
        right: right ? "20px" : undefined,
        bottom: bottom ? "20px" : undefined,
        left: left ? "20px" : undefined,
        backgroundColor: "white",
        borderRadius: "classic",
        boxShadow: "classic",
        padding: "10px",
        zIndex: 1,
      }}
      {...rest}
    />
  );
};
