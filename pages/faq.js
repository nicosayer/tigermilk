import { Dialog } from "@blueprintjs/core";
import Head from "next/head";
import { QUESTIONS } from "../config/enums";
import globalStyles from "../styles/Global.module.css";
import styles from "../styles/FAQ.module.css";
import { useRouter } from "next/router";

export default function FAQ({ locale }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>TIGERMILK • FAQ</title>
      </Head>
      <Dialog isOpen onClose={() => router.push("/")} usePortal={false}>
        <div className={styles.body}>
          {QUESTIONS.map(({ title, content }, index, array) => (
            <div
              key={title.fr}
              className={index + 1 < array.length && globalStyles["margin-b"]}
            >
              <div className={`${globalStyles.title} color`}>
                {title[locale]}
              </div>
              <div className={globalStyles["margin-y"]}>
                <p>{content[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
}
