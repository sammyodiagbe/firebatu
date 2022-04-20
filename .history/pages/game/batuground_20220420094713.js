import { useRouter, useContext } from "next/router";
import { useEffect } from "react";
import Flipper from "../../components/batugrounds/flipper";
import { set } from "firebase/database";
import { database } from "../config/firebase.config";
import { authContext } from "../../context/authcontext";
import gameContext from "../../context/batuground";
import GameWrapper from "../../components/batugrounds/gameWrapper";

const BatuGround = () => {
  const router = useRouter();
  const { user } = useContext(authContext);
  const { room: gameRoom } = useContext(gameContext);
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
