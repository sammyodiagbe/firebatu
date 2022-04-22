import "../styles/globals.css";
import "../styles/style.css";
import AuthContextProvider, { useAuth } from "../context/authcontext";
import _ from "lodash";
import RoomContextProvider from "../context/roomContext";
import Nav from "../components/navigation";

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();

  return (
    <AuthContextProvider>
      {/* <Nav /> */}
      <RoomContextProvider>
        <Component {...pageProps} />
      </RoomContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
