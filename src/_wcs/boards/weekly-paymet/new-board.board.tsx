import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPaymet } from '../../../components/weekly-paymet/weekly-paymet';

export default createBoard({
    name: 'New Board',
    Board: () => <WeeklyPaymet />,
    environmentProps: {
        canvasWidth: 307
    }
});
