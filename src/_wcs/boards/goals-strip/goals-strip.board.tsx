
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GoalsStrip } from '../../../components/goals-strip/goals-strip';

export default createBoard({
    name: 'GoalsStrip',
    Board: () => <GoalsStrip />,
    environmentProps: {
        canvasWidth: 514,
        canvasHeight: 158
    }
});
