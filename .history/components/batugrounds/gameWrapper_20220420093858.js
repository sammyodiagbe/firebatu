import gameContext from "../../context/batuground";
import { useContext } from "react";

const GameWrapper = (props) => {
  const {} = useContext(gameContext);
  return (
    <gameContext.Provider>
      <>{props.children}</>
    </gameContext.Provider>
  );
};

export default GameWrapper;
