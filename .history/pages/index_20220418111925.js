import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth, firestore } from "../config/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useContext } from "react";
import Logout from "../components/logout";
import { authContext } from "../context/authcontext";
import { addDoc, collection } from "firebase/firestore";

// const activeUser = auth.currentUser;
// console.log(activeUser);

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useContext(authContext);

  const createUserWithUsername = async (e) => {
    e.preventDefault();
    try {
      const createuser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const updateprofile = await updateProfile(auth.currentUser, {
        displayName: username,
      });
      const add = await addDoc(
        collection(firestore, `users/${auth.currentUser.uid}`),
        {
          username,
          xp: 1000,
          total_batus: 0,
        }
      );
      console.log(add);
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
        {user && <Logout />}
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
