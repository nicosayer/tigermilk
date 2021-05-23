import { Box } from "components/Box";
import { AnchorButton, Button, Dialog, Menu, MenuDivider, MenuItem, Popover, } from "@blueprintjs/core";
import { useIsMobile } from "hooks/useIsMobile";
import { useState } from "react";
import Link from "next/link";

export const Popup = ({ color }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} style={{ background: '#0f3053' }} >
      <Box style={{
        // backgroundColor: 'jade'
      }} >
        <Box style={{ marginLeft: "20px", marginRight: "20px", }}>
          <Box
            as="img"
            alt="Elephant"
            src={`/logos/elephant-pink.png`}
            onClick={handleClose}
            style={{
              cursor: 'pointer',
              height: "200px",
              width: "200px",
              objectFit: "contain",
            }}
          />
          <Box
            style={{
              marginBottom: "20px",
              textAlign: "justify",
              textAlignLast: "center",
              color: 'white',
              fontSize: 'larger'
            }}
          >
            Holà !
            <br /><br />
            Nous sommes toujours en Click & Collect au <a href='https://joinpulp.com/tigermilkcanal'>Tigermilk Canal</a> et au <a href='https://app.joinpulp.com/shop/f62f0423-c47c-4ceb-9790-9c8710490680'>Tigermilk South Pigalle</a> !
            <br /><br />
            Le delivery est aussi disponible <a href='https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/tigermilk-paris'>ici</a> et <a href='https://www.ubereats.com/fr-en/paris/food-delivery/tigermilk-canal/JVaeD7tFScem3SbwcI5PYw'>ici</a> pour Tigermilk, et <a href='https://deliveroo.fr/fr/menu/paris/9eme-opera/2-ms-lamartine-compte'>ici</a> et <a href='https://www.ubereats.com/fr/paris/food-delivery/nomas-de-papa-taqueria-by-tigermilk-south-pigalle/ag4tqNMDSmaKzLErFs7Ncw'>ici</a> pour Nomás de Papa.
            <br /><br />
            Sinon (et surtout!) venez-nous voir au Tigermilk Sentier en réservant une table sur notre terrasse.
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
