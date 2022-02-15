import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Navbar } from "../../../src/components/navbar/navbar";
import { Button } from "../../../src/components/button/button";
import { Alignment } from "@blueprintjs/core";

export default createBoard({
  name: "Navbar",
  Board: () => (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Navbar.Divider />
        <Button className="@ns-minimal" icon="home" text="Home" />
        <Button className="@ns-minimal" icon="document" text="Files" />
      </Navbar.Group>
    </Navbar>
  ),
});
