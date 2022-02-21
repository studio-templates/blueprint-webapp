
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Goals2 } from '../../../components/goals-2/goals-2';
import { CardGoal } from '../../../components/card-goal/card-goal';

export default createBoard({
    name: 'Goals2',
    Board: () => <Goals2></Goals2>,
    environmentProps: {
        canvasWidth: 481
    }
});
