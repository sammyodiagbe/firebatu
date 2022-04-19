import { useRouter } from "next/router";
import Flipper from "../../components/batugrounds/flipper";

const BatuGround = () => {
  const router = useRouter();
  const { room } = router.query;

  return (
    <>
      <h1>Batuground {room}</h1>
      <main>
        <Flipper />
      </main>
    </>
  );
};

export default BatuGround;
