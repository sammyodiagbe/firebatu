import { useRouter } from "next/router";

const BatuGround = () => {
  const router = useRouter();
  const { room } = router.query;

  return (
    <>
      <h1>Batuground {room}</h1>
    </>
  );
};
