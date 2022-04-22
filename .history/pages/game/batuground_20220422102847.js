import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Flipper from "../../components/batugrounds/flipper";
import GameWrapper from "../../components/batugrounds/gameWrapper";
import Logout from "../../components/logout";
import { useRoomContext } from "../../context/roomContext";
import batugroundStyle from "../../styles/batuground.module.css";

const BatuGround = () => {
  const router = useRouter();
  const { room } = router.query;
  const { joinRoom } = useRoomContext();

  useEffect(() => {
    joinRoom(room);
  }, [joinRoom, room]);

  return (
    <GameWrapper>
      <div className="container">
        <main className={batugroundStyle.main}>
          <div className={batugroundStyle.activeUsers}>
            <h3>Active users</h3>
          </div>
          <aside className={batugroundStyle.gameboard}>
            <Flipper />
          </aside>
        </main>
      </div>
    </GameWrapper>
  );
};

export default BatuGround;
