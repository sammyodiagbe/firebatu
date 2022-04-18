import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth } from "../config/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";

// const activeUser = auth.currentUser;
// console.log(activeUser);

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setUserPassword] = useState("");
  const [email, setEmail] = useState("");

  const createUserWithUsername = async (e) => {
    e.preventDefault();
    try {
      const createuser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = createuser;
      const updateprofile = await updateProfile(user, {
        displayName: username,
      });
      console.log(updateprofile);
    } catch (error) {
      console.log(`Something went wrong`);
      console.log(error);
      console.log(error.code);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to firebatu</title>
        <meta name="description" content="Online mulitplayer battle ground." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Firebatu</h1>
        <div className={styles.container}>
          <form onSubmit={createUserWithUsername}>
            <input
              type={"email"}
              placeholder={"Enter email"}
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr />
            <input
              type="text"
              placeholder="Choose your identity!!"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <hr />
            <input
              type="password"
              placeholder="Choose password"
              name="password"
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
