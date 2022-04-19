import Head from "next/head";
import { useState, useEffect } from "react";
import { auth } from "../../config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { authContext } from "../../context/authcontext";
import _ from "lodash";
import { useRouter } from "next/router";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(authContext);
  const router = useRouter();

  useEffect(() => {
    if (!_.isEmpty(user)) router.push("/home");
  });

  const login = async (e) => {
    e.preventDefault();
    try {
      const loguserin = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      router.push("/home");
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
        {!_.isEmpty(user) ? <p>Authenticated</p> : <p>unauthorized</p>}
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
