import Link from "next/link";

const Game = ({ gameName, description }) => {
  return (
    <div className="game">
      <h2>{gameName}</h2>
      <p>{description}</p>
      <Link href={`/game/batuground?room=${gameName}`} passHref>
        {gameName}
      </Link>
    </div>
  );
};

export default Game;
