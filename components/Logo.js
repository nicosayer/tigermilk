import { Box } from "components/Box";
import { useIsMobile } from "hooks/useIsMobile";

export const Logo = ({ color }) => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return null;
  }

  return (
    <Box
      style={{
        display: "flex",
        zIndex: "1",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "classic",
        boxShadow: "classic",
      }}
    >
      <Box
        as="img"
        alt="Tigermilk logo"
        src={isMobile ? "/logos/monogram.svg" : "/logos/logo.svg"}
        style={{
          maxWidth: "400px",
          maxHeight: "100px",
          filter: color,
        }}
      />
    </Box>
  );
};
