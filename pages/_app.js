import "../styles/globals.css";
import AuthContextProvider, { useAuth } from "../context/authcontext";
import _ from "lodash";

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
