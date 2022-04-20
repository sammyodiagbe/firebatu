import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Flipper from "../../components/batugrounds/flipper";
import { authContext } from "../../context/authcontext";
import gameContext from "../../context/batuground";
import GameWrapper from "../../components/batugrounds/gameWrapper";

const BatuGround = () => {
  const router = useRouter();
  //   const { user } = useContext(authContext);
  //   const { room: gameRoom } = useContext(gameContext);
  const { room } = router.query;
  useEffect(() => {
    //  join the room in the realdatabase
  });

  return (
    <>
      <GameWrapper>
        <h1>Batuground {room}</h1>
        <main>
          <Flipper />
        </main>
      </GameWrapper>
    </>
  );
};

export default BatuGround;
