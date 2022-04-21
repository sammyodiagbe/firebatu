import { createContext, useContext } from "react";

export const roomContext = createContext({});
export const useRoomContext = () => useContext(roomContext);

const RoomContextProvider = ({ children }) => {
  return <roomContext.Provider>{children}</roomContext.Provider>;
};

export default RoomContextProvider;
