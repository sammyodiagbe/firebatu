import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Flipper from "../../components/batugrounds/flipper";
import GameWrapper from "../../components/batugrounds/gameWrapper";
import RoomContextProvider, { useRoomContext } from "../../context/roomContext";

const BatuGround = () => {
  const router = useRouter();
  const { room } = router.query;
  const { joinRoom } = useRoomContext();

  useEffect(() => {
    joinRoom(room);
  }, [joinRoom, room]);
  return (
    <RoomContextProvider>
      <GameWrapper>
        <h1>Batuground {room}</h1>
        <main>
          <Flipper />
        </main>
      </GameWrapper>
    </RoomContextProvider>
  );
};

export default BatuGround;
