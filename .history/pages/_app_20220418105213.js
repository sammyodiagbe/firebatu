import "../styles/globals.css";
import { authContext } from "../context/authcontext";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <authContext.Provider
      value={{ user, setUser, authenticated, setAuthenticated }}
    >
      <Component {...pageProps} />
    </authContext.Provider>
  );
}

export default MyApp;
