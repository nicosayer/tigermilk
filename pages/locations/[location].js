import { COLOR_FILTER, DAYS, RESTAURANTS } from "config/enums";

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
            <Box style={{ marginTop: "10px", marginBottom: "40px" }}>
              <Title color={color}>{languages[locale]?.word.Contact}</Title>
              <div>{languages[locale]?.locations.noReservations}</div>
              <Box style={{ marginTop: "10px" }}>
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
                  <a href={`mailto:${restaurant.email}`} target="_blank">
                    {restaurant.email}
                  </a>
                </div>
              </Box>
            </Box>
            <Title color={color}>{languages[locale]?.word.OpeningHours}</Title>
            <Box style={{ marginTop: "10px" }}>
              <Box as="table" style={{ width: "100%" }}>
                <tbody>
                  {DAYS.map((slug, index) => {
                    return (
                      <Box
                        as="tr"
                        style={{
                          fontWeight:
                            new Date().getDay() === index + 1
                              ? "bold"
                              : undefined,
                        }}
                        key={slug}
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
          </Box>
          {!isMobile && (
            <Box style={{ position: "relative", width: "100%" }}>
              <Box
                as="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={`/locations/${restaurant.slug}.png`}
              />
              <Box
                as="img"
                style={{
                  position: "absolute",
                  top: "calc(50% - 15px)",
                  left: "calc(50% - 15px)",
                  width: "30px",
                  filter: COLOR_FILTER[color],
                }}
                src="/logos/monogram.svg"
              />
            </Box>
          )}
        </Box>
      </Dialog>
    </div>
  );
}

export const getStaticPaths = () => {
  return {
    paths: RESTAURANTS.map(({ slug }) => `/locations/${slug}`),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  return { props: { params } };
};
