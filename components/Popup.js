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
        marginLeft: "20px",
        marginRight: "20px",
        cursor: 'pointer',
      }} onClick={handleClose}>
        <Box
          as="img"
          alt="Elephant"
          src={`/logos/elephant-${color}.png`}
          style={{
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
          Hola Amigos,
<br /><br />
Notre terrasse à Tigermilk Sentier est ouverte !
<br /><br />
Vous pouvez aussi commander vos plats à emporter en <a target='_blank' href='https://joinpulp.com/tigermilkcanal'>Click & Collect</a> ou en livraison (<a target='_blank' href="https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/tigermilk-paris">ici</a> et <a target='_blank' href="https://www.ubereats.com/fr-en/paris/food-delivery/tigermilk-canal/JVaeD7tFScem3SbwcI5PYw">ici</a>).
<br /><br />
El hermanito Nomás de Papa est toujours dispo en Click & Collect et livraison (<a target='_blank' href='https://app.joinpulp.com/shop/f62f0423-c47c-4ceb-9790-9c8710490680'>ici</a> et <a target='_blank' href='https://www.ubereats.com/fr-en/paris/food-delivery/tigermilk-canal/JVaeD7tFScem3SbwcI5PYw'>ici</a>).
<br /><br />
Hasta pronto!
          </Box>
      </Box>
    </Dialog>
  );
};
