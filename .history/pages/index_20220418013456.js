import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth } from "../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

// const activeUser = auth.currentUser;
// console.log(activeUser);

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setUserPassword] = useState("");

  const createUserWithUsername = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to firebatu</title>
        <meta name="description" content="Online mulitplayer battle ground." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Let's code this out</h1>
        <div className={styles.container}>
          <form onSubmit={createUserWithUsername}>
            <input
              type="text"
              placeholder="Choose your identity!!"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <hr />
            <input
              type="password"
              placeholder="Choose password"
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <hr />
            <button type="submit">Create your account</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
