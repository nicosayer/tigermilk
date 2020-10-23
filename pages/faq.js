import { Box } from "components/Box";
import { Dialog } from "@blueprintjs/core";
import Head from "next/head";
import { QUESTIONS } from "config/enums";
import { useRouter } from "next/router";

export default function FAQ({ locale, color }) {
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
          {QUESTIONS.map(({ title, content }) => (
            <Box key={title.fr}>
              <Box
                style={{ fontSize: "large", color: color, fontFamily: "title" }}
              >
                {title[locale]}
              </Box>
              <Box
                style={{
                  marginTop: "10px",
                }}
              >
                {content[locale]}
              </Box>
            </Box>
          )).reduce((acc, cur) => [
            acc,
            <Box style={{ marginBottom: "40px" }} />,
            cur,
          ])}
        </Box>
      </Dialog>
    </div>
  );
}
