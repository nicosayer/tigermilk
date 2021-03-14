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
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          overflow: "hidden",
          borderRadius: "classic",
        }}
      >
        <Box style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Box
            as="img"
            alt="Giraffe"
            src={`/logos/giraffe-${color}.png`}
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
            }}
          >
            Nos restaurants Tigermilk restent ouverts midi et soir en livraison et à emporter.
          </Box>
          <Box
            style={{
              fontStyle: "italic",
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            Our restaurants Tigermilk remain open for lunch and dinner for delivery and take-away.
          </Box>

          <Box style={{ marginTop: "20px", marginBottom: "20px" }}>
            <AnchorButton
              large
              minimal
              text="Menu"
              target="_blank"
              href="/pdfs/Menu_Delivery.pdf"
            />

            <Popover content={
              <Menu large>
                <MenuDivider title="Click & collect" />
                <MenuItem
                  text="Canal St Martin"
                  target="_blank"
                  href="https://joinpulp.com/tigermilkcanal" />
                <MenuItem
                  text="Sentier"
                  target="_blank"
                  href="https://app.joinpulp.com/shop/21c195ed-7e98-477b-bec3-2c0e436c4ffa" />
                <MenuItem
                  text="South Pigalle"
                  target="_blank"
                  href="https://app.joinpulp.com/shop/f62f0423-c47c-4ceb-9790-9c8710490680" />
                <MenuDivider title="Livraison / Delivery" />
                <MenuItem
                  text="Deliveroo"
                  target="_blank"
                  href='https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/tigermilk-paris' />
                <MenuItem
                  text="Uber eats"
                  target="_blank"
                  href='https://www.ubereats.com/fr-en/paris/food-delivery/tigermilk-canal/JVaeD7tFScem3SbwcI5PYw' />
              </Menu>
            }>
              <AnchorButton
                large
                minimal
                text="Paris"
              />
            </Popover>

            <Popover content={
              <Menu large>
                <MenuItem
                  text="Click & collect"
                  target="_blank"
                  href='https://joinpulp.com/tigermilkbruxelles' />
                <MenuItem
                  text="Deliveroo"
                  target="_blank"
                  href='https://deliveroo.be/fr/menu/brussels/chatelain/2ms-bailli' />
                <MenuItem
                  text="Uber Eats"
                  target="_blank"
                  href='https://www.ubereats.com/be/brussels/food-delivery/tigermilk/NwtYEog9TVqQYoe5LKZ1Sg' />
              </Menu>
            }>
              <AnchorButton
                large
                minimal
                text="Brussels"
              />
            </Popover>
          </Box>
        </Box>
        {!isMobile && (
          <Box
            onClick={handleClose}
            style={{
              cursor: 'pointer',
              backgroundImage: 'url("/pictures/40.jpg")',
              backgroundPosition: "center",
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
