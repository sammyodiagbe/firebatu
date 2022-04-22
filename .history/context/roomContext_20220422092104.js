import { createContext, useContext } from "react";
import { database } from "../config/firebase.config";
import {} from "firebase/database";
import { useAuth } from "./authcontext";

export const roomContext = createContext({});
export const useRoomContext = () => useContext(roomContext);

const RoomContextProvider = ({ children }) => {
  const { user } = useAuth();
  const joinRoom = (roomname, data) => {
    // this function is for joining room
    const { displayName } = data;
    set(ref(db, "users/" + user.uid), {
      displayName,
    });
  };
  return (
    <roomContext.Provider value={{ joinRoom }}>{children}</roomContext.Provider>
  );
};

export default RoomContextProvider;
