import { Box } from "components/Box";
import { getColorFilter } from "utils";
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
        position: "fixed",
        zIndex: "1",
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
        style={{
          maxWidth: "400px",
          maxHeight: "100px",
          filter: getColorFilter(color.name),
        }}
        src={isMobile ? "/logos/monogram.svg" : "/logos/logo.svg"}
      />
    </Box>
  );
};
