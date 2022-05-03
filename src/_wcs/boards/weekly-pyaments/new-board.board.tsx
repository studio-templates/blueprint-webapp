import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPyaments } from '../../../components/weekly-pyaments/weekly-pyaments';

export default createBoard({
    name: 'New Board',
    Board: () => <WeeklyPyaments />,
    environmentProps: {
        windowWidth: 1130,
        windowHeight: 732,
        canvasWidth: 319
    }
});
