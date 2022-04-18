import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth } from "../config/firebase.config";

console.log(auth);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to firebatu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Let's code this out</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
