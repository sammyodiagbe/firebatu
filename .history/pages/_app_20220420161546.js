import "../styles/globals.css";
import { authContext } from "../context/authcontext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import _ from "lodash";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (!user) {
        // here we know user is not logged in
        setAuthenticated(false);
      } else {
        setUser(user);
        setAuthenticated(true);
      }
    });
  }, [user]);
  return (
    <authContext.Provider value={{ user, authenticated }}>
      <Component {...pageProps} />
    </authContext.Provider>
  );
}

export default MyApp;
