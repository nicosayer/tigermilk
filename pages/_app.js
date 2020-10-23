import "styles/globals.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { getLocale, randomChunks, randomColor } from "utils";
import { useEffect, useState } from "react";

import { Box } from "components/Box";
import { Footer } from "components/Footer";
import { Gallery } from "components/Gallery";
import Head from "next/head";
import { Header } from "components/Header";
import { LANGUAGES } from "config/enums";
import { Logo } from "components/Logo";
import { Popup } from "components/Popup";
import theme from "config/theme";

export default function App({ Component, pageProps }) {
  const [color, setColor] = useState("");
  const [chunks, setChunks] = useState([]);
  const [locale, setLocale] = useState(LANGUAGES[0]);

  useEffect(() => {
    setColor(randomColor());
    setChunks(randomChunks());
    setLocale(getLocale());
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", getLocale(locale));
  }, [locale]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>TIGERMILK</title>
        <meta
          name="description"
          content="Fast, Fresh, Fun, affordable latin flavored food! All dishes are made in house. Our sourcing provides you with high quality products from sustainable suppliers. Every day we cook, chop, and bake fresh ingredients to make sure you taste great flavours!"
        />
        <meta
          name="keywords"
          content="restaurant, paris, bruxelles, brussels, tigermilk, food, south, america"
        />
        <meta property="og:title" content="TIGERMILK - Paris & Brussels" />
        <meta
          property="og:description"
          content="Fast, Fresh, Fun, affordable latin flavored food! All dishes are made in house. Our sourcing provides you with high quality products from sustainable suppliers. Every day we cook, chop, and bake fresh ingredients to make sure you taste great flavours!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tigermilkrestaurants.com/" />
        <meta property="og:image" content="/logos/Logo_Lemon_Forest.png" />
        <link
          rel="icon"
          type="image/png"
          href={`/logos/favicon-${color}.png`}
        />
      </Head>
      {!color && (
        <Box
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: color,
            zIndex: 1000,
          }}
        >
          <Box
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              alt="Tigermilk logo"
              as="img"
              style={{
                maxWidth: "400px",
                maxHeight: "100px",
                filter: "white",
              }}
              src="/logos/monogram.svg"
            />
          </Box>
        </Box>
      )}
      <Header locale={locale} setLocale={setLocale} color={color} />
      <Box
        style={{ cursor: "pointer" }}
        onClick={() => {
          setColor(randomColor(color));
          setChunks(randomChunks());
        }}
      >
        <Logo color={color} />
      </Box>
      <Box
        style={{
          position: "fixed",
          top: "grid-gap",
          left: "grid-gap",
          right: "grid-gap",
          bottom: "grid-gap",
          overflow: "hidden",
        }}
      >
        <Gallery chunks={chunks} />
      </Box>
      <Footer locale={locale} setLocale={setLocale} color={color} />
      <Popup color={color} />
      <Component {...pageProps} color={color} locale={locale} />
      <style jsx global>{`
        a {
          color: ${theme.color[color]} !important;
        }
      `}</style>
    </>
  );
}
