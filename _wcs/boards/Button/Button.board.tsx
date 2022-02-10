import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Button } from "../../../src/components/button/button";

export default createBoard({
  name: "Button",
  Board: () => <Button />,
});
