import Head from "next/head";
import MainPage from "../features/Homepage/components/MainPage/MainPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wedding of Edwar and Saras</title>
        <meta name="description" content="Wedding Of Edwar and Saras" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/foundation-emails/2.2.1/foundation-emails.css"
        ></link>
      </Head>

      <MainPage />
      <div>
        <p className="text-center">
          <small>
            100% Credit for this Codepen for the design shoutout to isadora3
          </small>
        </p>
      </div>
    </div>
  );
}
