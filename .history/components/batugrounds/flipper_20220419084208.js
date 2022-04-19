import { useState } from "react";
import _ from "lodash";

const Flipper = () => {
  const [board, setBoard] = useState([
    [1, 2, 3, 4, 1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2, 3, 4, 3, 4],
    [1, 2, 3, 4, 1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2, 3, 4, 3, 4],
    [1, 2, 3, 4, 1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2, 3, 4, 3, 4],
    [1, 2, 3, 4, 1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2, 3, 4, 3, 4],
    [1, 2, 3, 4, 1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2, 3, 4, 3, 4],
  ]);

  console.log(_.shuffle(board));
  return <></>;
};

export default Flipper;
