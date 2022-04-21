import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Flipper from "../../components/batugrounds/flipper";
import GameWrapper from "../../components/batugrounds/gameWrapper";

const BatuGround = () => {
  const router = useRouter();
  const { room } = router.query;
  return (
    <GameWrapper>
      <h1>Batuground {room}</h1>
      <main>
        <Flipper />
      </main>
    </GameWrapper>
  );
};

export default BatuGround;
