import React from "react";
import { createBoard } from "@wixc3/react-board";
import { ButtonGroup } from "../../../src/components/button-group/button-group";
import { Button } from "../../../src/components/button/button";

export default createBoard({
  name: "ButtonGroup",
  Board: () => (
    <ButtonGroup>
      <Button icon="emoji" />
      <Button icon="emoji" />
      <Button icon="emoji" />
      <Button icon="emoji" />
    </ButtonGroup>
  ),
});
