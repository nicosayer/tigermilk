import { Box } from "components/Box";
import { Button, Dialog, Intent } from "@blueprintjs/core";
import { useIsMobile } from "hooks/useIsMobile";
import { useState } from "react";
import Link from "next/link";

export const Popup = ({ color }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();

  const handleClose = () => {
    setIsOpen(false);
  };

  const BigButton = ({ children, href }) => {
    return (
      <Box style={{ marginBottom: "4px" }}>
        <Box
          as="a"
          href={href}
          target="_blank"
          hover={{ textDecoration: "none" }}
          onClick={(event) => event.stopPropagation()}
        >
          <Button minimal>
            <Box
              style={{
                // fontSize: "large",
                fontFamily: "classic",
                color,
              }}
            >
              {children}
            </Box>
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <Box
        style={{
          display: "grid",
          cursor: "pointer",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          overflow: "hidden",
          borderRadius: "classic",
        }}
        onClick={handleClose}
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
            Nos restaurants Tigermilk{" "}
            <Link href="/locations/brussels">
              <Box
                as="span"
                style={{ color: color }}
                hover={{ textDecoration: "underline" }}
                onClick={handleClose}
              >
                Brussels
              </Box>
            </Link>{" "}
            et{" "}
            <Link href="/locations/paris-canal-st-martin">
              <Box
                as="span"
                style={{ color: color }}
                hover={{ textDecoration: "underline" }}
                onClick={handleClose}
              >
                Canal St-Martin
              </Box>
            </Link>{" "}
            restent ouverts midi et soir en livraison et à emporter.
          </Box>
          <Box
            style={{
              fontStyle: "italic",
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            Our restaurants Tigermilk{" "}
            <Link href="/locations/brussels">
              <Box
                as="span"
                style={{ color: color }}
                hover={{ textDecoration: "underline" }}
                onClick={handleClose}
              >
                Brussels
              </Box>
            </Link>{" "}
            and{" "}
            <Link href="/locations/paris-canal-st-martin">
              <Box
                as="span"
                style={{ color: color }}
                hover={{ textDecoration: "underline" }}
                onClick={handleClose}
              >
                Canal St-Martin
              </Box>
            </Link>{" "}
            remain open for lunch and dinner for delivery and take-away.
          </Box>

          <Box style={{ marginTop: "20px", marginBottom: "20px" }}>
            <BigButton href="/pdfs/Menu_Delivery.pdf">Menu</BigButton>
          </Box>
          <Box style={{ marginBottom: "20px" }}>
            <Box
              style={{
                fontFamily: "title",
                fontSize: "large",
              }}
            >
              Paris :
            </Box>
            <BigButton href="https://joinpulp.com/tigermilkcanal">
              Click & Collect
            </BigButton>
            <BigButton href="https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/tigermilk-paris">
              Deliveroo
            </BigButton>
            <BigButton href="https://www.ubereats.com/fr-en/paris/food-delivery/tigermilk-canal/JVaeD7tFScem3SbwcI5PYw">
              Uber Eats
            </BigButton>
          </Box>
          <Box style={{ marginBottom: "20px" }}>
            <Box
              style={{
                fontFamily: "title",
                fontSize: "large",
              }}
            >
              Brussels :
            </Box>
            <BigButton href="https://joinpulp.com/tigermilkbruxelles">
              Click & Collect
            </BigButton>
            <BigButton href="https://deliveroo.be/fr/menu/brussels/chatelain/2ms-bailli">
              Deliveroo
            </BigButton>
            <BigButton href="https://www.ubereats.com/be/brussels/food-delivery/tigermilk/NwtYEog9TVqQYoe5LKZ1Sg">
              Uber Eats
            </BigButton>
          </Box>
        </Box>
        {!isMobile && (
          <Box
            style={{
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
