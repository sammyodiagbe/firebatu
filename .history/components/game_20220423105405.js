import Link from "next/link";

const Game = ({ gameName }) => {
  return (
    <div className="game">
      <h1>{gameName}</h1>
      <p>Some sort of description</p>
      <Link href={`/game/batuground?room=${gameName}`} passHref>
        Flipper
      </Link>
    </div>
  );
};

export default Game;
