
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { CardGoal } from '../../../components/card-goal/card-goal';
import CardGoal_module_scss from '../../../components/card-goal/card-goal.module.scss';

export default createBoard({
    name: 'CardGoal',
    Board: () => {
        return (<CardGoal


            price={550}
            date="21/02/2022"
            subject="Holiday"
            icontype="mountain"
            className={CardGoal_module_scss.cards}
        />)
    },
    environmentProps: {
        canvasHeight: 5
    }
});
