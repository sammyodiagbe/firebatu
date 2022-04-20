import { useState, useEffect } from "react";
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

  useEffect(() => {
    // join the room
  }, []);
  //   position of the selection made by the current player
  const [selectionsPos, setSelectionPos] = useState([null, null]);

  //   used to validate postion selection by player
  const validatePlay = (coordinate) => {
    const [x1, y1] = coordinate[0]; // grab first tile pos
    const [x2, y2] = coordinate[1]; // grab second tile pos
    //   for safety some people might try to play smart lol
    if (board[x1][y1] == null || board[x2][y2] == null) return;
    if (board[x1][y1] === board[x2][y2]) {
      //   the current player has found a match
      const newBoard = [...board];
      newBoard[x1][y1] = 0;
      newBoard[x2][y2] = 0;
      setBoard(newBoard);
      setSelectionPos([null, null]);
      // we want to update current player scores
      // they get to still play on because they made a right selection
    } else {
      //   the current player has not found a matching tile
      setSelectionPos([null, null]);
      // switch player turn
    }
  };

  const convertStringPosToint = (stringData) => {
    const arr = stringData.split(",");
    return [parseInt(arr[0]), parseInt(arr[1])];
  };

  const makeSelection = (e) => {
    e.preventDefault();
    const { target } = e;
    const { entryValue, entryIndex } = target.dataset;
    entryValue = parseInt(entryValue);
    if (selectionsPos[0] == null) {
      let newPos = [...selectionsPos];
      newPos[0] = convertStringPosToint(entryIndex);
      setSelectionPos(newPos);
    } else {
      let newPos = [...selectionsPos];
      newPos[1] = convertStringPosToint(entryIndex);
      validatePlay(selectionsPos);
    }
  };

  const renderGameBoard = board.map((entry, index) => {
    return (
      <div className="row" key={index} style={{ display: "flex" }}>
        {entry.map((space, ind) => {
          return (
            <div className="col" key={ind}>
              <button
                className="action-trigger"
                data-entry-value={`${space}`}
                data-entry-index={`${index},${ind}`}
                onClick={makeSelection}
                disabled={space == 0}
                style={{
                  padding: "15px",
                  margin: "5px",
                  background: "hsl(268,80%,78%)",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                }}
              >
                {space}
              </button>
            </div>
          );
        })}
      </div>
    );
  });

  return <div className="board">{renderGameBoard}</div>;
};

export default Flipper;
