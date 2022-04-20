import "../styles/globals.css";
import { authContext } from "../context/authcontext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import _ from "lodash";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  // since we cannot get the user immediately our pages load then we can show the users a loading screen
  // while we try to get the user
  const [loading, setLoadingState] = useState(true);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (!user) {
        // here we know user is not logged in
        setAuthenticated(false);
        // setLoadingState(false);
      } else {
        setUser(user);
        setAuthenticated(true);
        // setLoadingState(false);
      }
    });
  }, [user]);
  return (
    <authContext.Provider value={{ user, authenticated, loading }}>
      <Component {...pageProps} />
    </authContext.Provider>
  );
}

export default MyApp;
