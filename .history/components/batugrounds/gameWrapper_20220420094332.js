import gameContext from "../../context/batuground";
import { useContext } from "react";

const GameWrapper = (props) => {
  const { room } = useContext(gameContext);
  return (
    <gameContext.Provider value={{ room }}>
      <>{props.children}</>
    </gameContext.Provider>
  );
};

export default GameWrapper;
