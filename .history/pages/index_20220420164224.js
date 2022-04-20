import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth, firestore } from "../config/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../context/authcontext";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import _ from "lodash";
import Loader from "../components/loader";

// const activeUser = auth.currentUser;
// console.log(activeUser);

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user, authenticated, loading } = useContext(authContext);
  const router = useRouter();

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
      const add = await setDoc(doc(firestore, "users", auth.currentUser.uid), {
        username,
        xp: 1000,
        total_batus: 0,
        won: 0,
        lost: 0,
      });
      router.push("/home");
    } catch (error) {}
  };
  if (loading) {
    return <Loader />;
  } else if (authenticated) {
    return <Home />;
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Welcome to firebatu</title>
          <meta
            name="description"
            content="Online mulitplayer battle ground."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>Firebatu</h1>
          {}
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
}
