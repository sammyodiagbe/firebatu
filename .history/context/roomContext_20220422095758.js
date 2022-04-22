import { createContext, useContext } from "react";
import { database } from "../config/firebase.config";
import { set, ref } from "firebase/database";
import { useAuth } from "./authcontext";

export const roomContext = createContext({});
export const useRoomContext = () => useContext(roomContext);

const RoomContextProvider = ({ children }) => {
  const { user } = useAuth();
  const joinRoom = async (roomname) => {
    // this function is for joining room
    try {
      await set(ref(database, `${roomname}/` + user.uid), {
        displayName: user.displayName,
      });
      console.log("succesfully joined room");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <roomContext.Provider value={{ joinRoom }}>{children}</roomContext.Provider>
  );
};

export default RoomContextProvider;
