import Head from "next/head";
import { useState } from "react";
import { auth } from "../../config/firebase.config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Logout from "../../components/logout";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    try {
      const loguserin = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
    } catch (error) {
      console.error(error.code);
    }
  };
  return (
    <>
      <Head>
        <title>Log into firebatu account</title>
      </Head>
      <main>
        <h1>Log into firebatu account</h1>
        <div>
          <form onSubmit={login}>
            <input
              type="text"
              placeholder="username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <hr />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <hr />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signin;
