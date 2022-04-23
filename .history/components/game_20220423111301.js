import Link from "next/link";

const Game = ({ gameName, description }) => {
  return (
    <div className="game">
      <h2>{gameName}</h2>
      <p>{description}</p>
      <Link href={`/game/batuground?room=${gameName}`} passHref>
        <p>Play {gameName}<p/>
      </Link>
    </div>
  );
};

export default Game;
