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

  console.log(board);
  return <></>;
};

export default Flipper;
