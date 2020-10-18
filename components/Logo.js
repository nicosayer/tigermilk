import { Box } from "components/Box";
import { COLOR_FILTER } from "config/enums";
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
        alt="Tigermilk logo"
        as="img"
        style={{
          maxWidth: "400px",
          maxHeight: "100px",
          filter: COLOR_FILTER[color],
        }}
        src={isMobile ? "/logos/monogram.svg" : "/logos/logo.svg"}
      />
    </Box>
  );
};
