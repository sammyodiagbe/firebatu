import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Flipper from "../../components/batugrounds/flipper";
import GameWrapper from "../../components/batugrounds/gameWrapper";
import { useRoomContext } from "../../context/roomContext";

const BatuGround = () => {
  const router = useRouter();
  const { room } = router.query;
  const { joinRoom } = useRoomContext();

  useEffect(() => {
    joinRoom(room);
  }, [joinRoom, room]);

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
