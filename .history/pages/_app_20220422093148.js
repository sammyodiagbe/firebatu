import "../styles/globals.css";
import AuthContextProvider, { useAuth } from "../context/authcontext";
import _ from "lodash";
import RoomContextProvider from "../context/roomContext";

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();

  return (
    <AuthContextProvider>
      <RoomContextProvider>
        <Component {...pageProps} />
      </RoomContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
