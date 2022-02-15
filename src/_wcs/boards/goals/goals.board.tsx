
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Goals } from '../../../components/goals/goals';

export default createBoard({
    name: 'Goals',
    Board: () => <Goals />,
    environmentProps: {
        canvasWidth: 208,
        canvasHeight: 215
    }
});
