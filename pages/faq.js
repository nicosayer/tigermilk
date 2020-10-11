import { Dialog } from "@blueprintjs/core";
import Head from "next/head";
import { QUESTIONS } from "../enums";
import globalStyles from "../styles/Global.module.css";
import styles from "../styles/FAQ.module.css";
import { useRouter } from "next/router";

export default function FAQ() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>TIGERMILK • FAQ</title>
      </Head>
      Salut frere
      <Dialog isOpen onClose={() => router.push("/")} usePortal={false}>
        <div className={styles.body}>
          {QUESTIONS.map(({ title, content }, index, array) => (
            <div
              key={title.fr}
              className={index + 1 < array.length && globalStyles["margin-b"]}
            >
              <div className={`${globalStyles.title} color`}>
                <span>{title.fr}</span>{" "}
                <span className={globalStyles.italic}>{title.en}</span>
              </div>
              <div className={globalStyles["margin-y"]}>
                <p>{content.fr}</p>
              </div>
              <div className={globalStyles.italic}>
                <p>{content.en}</p>
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
}
