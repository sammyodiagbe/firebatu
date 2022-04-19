import { useState } from "react";
import _ from "lodash";
import { listToMatrix } from "../../utils";

const Flipper = () => {
  const [board, setBoard] = useState(
    listToMatrix(
      _.shuffle([
        1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 3, 4, 1, 2, 3, 4,
        1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
        1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 1, 2,
        3, 4, 1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2,
        3, 4, 3, 4,
      ]),
      10
    )
  );

  const renderGameBoard = board.map((entry, index) => {
    return (
      <div className="row" key={index}>
        {entry.map((space, ind) => {
          return (
            <div className="col" key={ind}>
              <button className="action-trigger">{entry}</button>
            </div>
          );
        })}
      </div>
    );
  });

  return <div className="board">{renderGameBoard}</div>;
};

export default Flipper;
