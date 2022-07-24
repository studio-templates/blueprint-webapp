import React from "react";
import { createBoard } from "@wixc3/react-board";
import { CreditCard } from "../../../src/components/credit-card/credit-card";

export default createBoard({
  name: "Credit Card - Premium",
  Board: () => (
    <CreditCard
      cardInfo={{
        company: "cloudcash",
        cardHolder: "Mike Smith",
        expiryDate: "06/21",
        premium: true,
      }}
    />
  ),
});
