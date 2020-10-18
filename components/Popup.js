import { Box } from "components/Box";
import { Dialog } from "@blueprintjs/core";
import { useIsMobile } from "hooks/useIsMobile";
import { useState } from "react";

export const Popup = ({ color }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();

  return (
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        style={{
          display: "grid",
          cursor: "pointer",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
        onClick={() => setIsOpen(false)}
      >
        <Box style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Box
            as="img"
            src={`logos/giraffe-${color}.png`}
            style={{
              height: "200px",
              width: "200px",
              objectFit: "contain",
            }}
          />
          <Box style={{ marginBottom: "40px" }}>
            À compter du 17 octobre, tous nos restaurants parisiens seront
            ouverts dès 18h30 pour le service du soir, les services du midi
            restent inchangés. Et BIG NEWS, notre restaurant Canal St-Martin
            propose le brunch samedi et dimanche !
          </Box>
          <Box style={{ marginBottom: "10px", fontStyle: "italic" }}>
            From October 17, all of our Parisian restaurants will be open from
            6.30 p.m. for evening service, lunchtime services remain unchanged.
            And BIG NEWS, our Canal St-Martin restaurant offers brunch on
            Saturday and Sunday!
          </Box>
          <Box
            as="img"
            src={`logos/owl-${color}.png`}
            style={{
              height: "200px",
              width: "200px",
              objectFit: "contain",
            }}
          />
        </Box>
        {!isMobile && (
          <Box
            style={{
              backgroundImage: 'url("pictures/40.jpg")',
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              borderTopRightRadius: "classic",
              borderBottomRightRadius: "classic",
            }}
          />
        )}
      </Box>
    </Dialog>
  );
};
