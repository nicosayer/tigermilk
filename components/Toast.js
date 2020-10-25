import { Box } from "components/Box";
import { useEffect, useState } from "react";

export const Toast = ({ top, right, bottom, left, ...rest }) => {
  const [visibility, setVisibility] = useState("hidden");

  useEffect(() => {
    setVisibility("visible");
  }, []);

  return (
    <Box
      style={{
        visibility: visibility,
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
