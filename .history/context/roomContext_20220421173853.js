import { createContext, useContext } from "react";

export const roomContext = createContext({});
export const useRoomContext = () => useContext(roomContext);

const RoomContextProvider = ({ children }) => {
  const joinRoom = (roomname) => {
    // this function is for joining room
    console.log("hello world");
  };
  return (
    <roomContext.Provider value={{ joinRoom }}>{children}</roomContext.Provider>
  );
};

export default RoomContextProvider;
