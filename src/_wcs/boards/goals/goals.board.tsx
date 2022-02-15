import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Goal } from "../../../components/goal/goal";

export default createBoard({
  name: "Goals",
  Board: () => <Goal />,
  environmentProps: {
    canvasWidth: 208,
    canvasHeight: 215,
  },
});
