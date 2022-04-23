import Link from "next/link";

const Game = ({ gameName, description }) => {
  return (
    <div className="game">
      <h1>{gameName}</h1>
      <p>{description}</p>
      <Link href={`/game/batuground?room=${gameName}`} passHref>
        <>Play {gameName}</>
      </Link>
    </div>
  );
};

export default Game;
