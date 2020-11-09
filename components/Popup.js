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
          <Box
            style={{
              margin: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                fontFamily: "title",
                color,
                fontSize: "large",
                marginBottom: "6px",
              }}
            >
           À emporter / Take-away:
            </Box>
            <Box
              as="a"
              href="/pdfs/Menu_Delivery.pdf"
              target="_blank"
              hover={{ textDecoration: "none" }}
              onClick={(event) => event.stopPropagation()}
            >
              <Button fill outlined rightIcon="document-open">
                Menu
              </Button>
            </Box>
          </Box>
          <Box
            style={{
              margin: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                fontSize: "large",
                fontFamily: "title",
                color,
                marginBottom: "6px",
              }}
            >
              Brussels:
            </Box>
            <Box
              as="a"
              href="https://deliveroo.be/fr/menu/brussels/chatelain/2ms-bailli"
              target="_blank"
              hover={{ textDecoration: "none" }}
              onClick={(event) => event.stopPropagation()}
            >
              <Button rightIcon="share" outlined>
                Deliveroo
              </Button>
            </Box>
          </Box>
          <Box
            style={{
              margin: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              style={{
                fontFamily: "title",
                fontSize: "large",
                color,
                marginBottom: "6px",
              }}
            >
              Paris:
            </Box>
            <Box
              as="a"
              href="https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/tigermilk-paris"
              target="_blank"
              hover={{ textDecoration: "none" }}
              onClick={(event) => event.stopPropagation()}
              style={{
                marginBottom: "10px",
              }}
            >
              <Button rightIcon="share" outlined>
                Deliveroo
              </Button>
            </Box>
            <Box
              as="a"
              href="https://www.ubereats.com/fr-en/paris/food-delivery/tigermilk-canal/JVaeD7tFScem3SbwcI5PYw"
              target="_blank"
              hover={{ textDecoration: "none" }}
              onClick={(event) => event.stopPropagation()}
            >
              <Button rightIcon="share" outlined>
                Uber Eats
              </Button>
            </Box>
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
