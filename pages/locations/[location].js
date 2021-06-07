import { DAYS, RESTAURANTS } from "config/enums";

import { Box } from "components/Box";
import { Dialog } from "@blueprintjs/core";
import Head from "next/head";
import languages from "languages";
import { useIsMobile } from "hooks/useIsMobile";
import { useRouter } from "next/router";

const Title = ({ color, ...rest }) => {
  return (
    <Box
      style={{
        fontSize: "large",
        lineHeight: "large",
        color,
        fontFamily: "title",
        marginBottom: "10px",
      }}
      {...rest}
    />
  );
};

export default function Location({ params, color, locale }) {
  const { location } = params;
  const router = useRouter();
  const isMobile = useIsMobile();

  const restaurant = RESTAURANTS.find(({ slug }) => slug === location);

  return (
    <div>
      <Head>
        <title>TIGERMILK • {restaurant.name[locale]}</title>
      </Head>
      <Dialog
        isOpen
        onClose={() => router.push("/")}
        usePortal={false}
        backdropClassName="bp3-backdrop"
      >
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          }}
        >
          <Box
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box style={{ marginBottom: "40px" }}>
              <Title color={color}>{languages[locale]?.word.Address}</Title>
              <div>{restaurant.address}</div>
            </Box>
            <Box style={{ marginBottom: "40px" }}>
              <Title color={color}>{languages[locale]?.word.Contact}</Title>
              <Box style={{ marginTop: "10px", marginBottom: "10px" }}>
                {restaurant.phone && (
                  <div>
                    {languages[locale]?.word.Tel}
                    {languages[locale]?.[":"]}
                    {restaurant.phone}
                  </div>
                )}
                <div>
                  {languages[locale]?.word.Email}
                  {languages[locale]?.[":"]}
                  {restaurant.email}
                </div>
              </Box>
              {Boolean(restaurant.booking) && <a href={restaurant.booking} target="_blank">
                {languages[locale]?.word.BookATable}
              </a>}
            </Box>
            {restaurant.delivery && (
              <Box style={{ marginBottom: "40px" }}>
                <Title color={color}>{languages[locale]?.word.Delivery}</Title>
                {restaurant.delivery
                  .map(({ name, url }) => (
                    <a key={name} href={url} target="_blank">
                      {name}
                    </a>
                  ))
                  .reduce((acc, cur) => [acc, " - ", cur])}
              </Box>
            )}
            <Title color={color}>{languages[locale]?.word.OpeningHours}</Title>
            <Box as="table" style={{ width: "100%" }}>
              <tbody>
                {DAYS.map(({ slug, index }) => {
                  return (
                    <Box
                      key={slug}
                      as="tr"
                      style={{
                        fontWeight:
                          new Date().getDay() === index ? "bold" : undefined,
                      }}
                    >
                      <td>{languages[locale]?.days[slug]}</td>
                      <td>{restaurant.openingHours[slug].lunch}</td>
                      <td>{restaurant.openingHours[slug].diner}</td>
                    </Box>
                  );
                })}
              </tbody>
            </Box>
          </Box>
          {!isMobile && (
            <Box style={{ position: "relative", width: "100%" }}>
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundImage: `url("/locations/${restaurant.slug}.png")`,
                  backgroundPosition: "center",
                  borderTopRightRadius: "classic",
                  borderBottomRightRadius: "classic",
                }}
              />
              <Box
                as="img"
                alt="Tigermilk logo"
                src="/logos/monogram.svg"
                style={{
                  position: "absolute",
                  top: "calc(50% - 15px)",
                  left: "calc(50% - 15px)",
                  width: "30px",
                  filter: color,
                }}
              />
            </Box>
          )}
        </Box>
      </Dialog>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: RESTAURANTS.map(({ slug }) => ({ params: { location: slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}
