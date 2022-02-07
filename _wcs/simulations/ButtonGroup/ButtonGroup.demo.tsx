import React from "react";
import { createDemo } from "@wixc3/react-simulation";
import { ButtonGroup } from "../../../src/components/button-group/button-group";
import { Button } from "../../../src/components/button/button";

export default createDemo({
  name: "ButtonGroup",
  demo: () => (
    <ButtonGroup>
      <Button icon="emoji" />
      <Button icon="emoji" />
      <Button icon="emoji" />
      <Button icon="emoji" />
    </ButtonGroup>
  ),
});
