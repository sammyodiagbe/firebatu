import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth } from "../config/firebase.config";

// const activeUser = auth.currentUser;
// console.log(activeUser);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to firebatu</title>
        <meta name="description" content="Online mulitplayer battle ground." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Let's code this out</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
