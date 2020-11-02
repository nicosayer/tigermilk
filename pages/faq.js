import { Box } from "components/Box";
import { Dialog } from "@blueprintjs/core";
import Head from "next/head";
import { QUESTIONS } from "config/enums";
import { useRouter } from "next/router";
import { LanguageSwitch } from "components/LanguageSwitch";

export default function FAQ({ locale, setLocale, color }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>TIGERMILK • FAQ</title>
      </Head>
      <Dialog
        isOpen
        onClose={() => router.push("/")}
        usePortal={false}
        backdropClassName="bp3-backdrop"
      >
        <Box style={{ padding: "20px" }}>
          <Box
            style={{
              fontFamily: "title",
              fontSize: "large",
              marginBottom: "40px",
            }}
          >
            <LanguageSwitch
              locale={locale}
              setLocale={setLocale}
              color={color}
              long
            />
          </Box>
          {QUESTIONS.map(({ title, content }) => (
            <div key={title.fr}>
              <Box
                style={{
                  fontSize: "large",
                  color: color,
                  fontFamily: "title",
                  marginBottom: "10px",
                }}
              >
                {title[locale]}
              </Box>
              <div>{content[locale]}</div>
            </div>
          )).reduce((acc, cur) => [
            acc,
            <Box key={cur.key} style={{ marginTop: "40px" }}>
              {cur}
            </Box>,
          ])}
        </Box>
      </Dialog>
    </div>
  );
}
