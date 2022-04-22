import { createContext, useContext } from "react";
import { database } from "../config/firebase.config";
import {} from "firebase/database";
import { useAuth } from "./authcontext";

export const roomContext = createContext({});
export const useRoomContext = () => useContext(roomContext);

const RoomContextProvider = ({ children }) => {
  const { user } = useAuth();
  const joinRoom = (roomname) => {
    // this function is for joining room
    set(ref(db, `${roomname}/` + user.uid), {
      displayName: user.displayName,
    });
  };
  return (
    <roomContext.Provider value={{ joinRoom }}>
      {user ? children : null}
    </roomContext.Provider>
  );
};

export default RoomContextProvider;
