import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Goal } from "../../../components/goal/goal";

const goal: Goal = {
        category: 'Holiday',
        date: '15/12/2009',
        icon: 'add',
        price: 550
    }

export default createBoard({
    name: "Goals",
    Board: () => <Goal goal={goal} />,
    environmentProps: {
        canvasWidth: 208,
        canvasHeight: 215,
    },
});
