import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPayemnts } from '../../../components/weekly-payemnts/weekly-payemnts';

export default createBoard({
    name: 'WeeklyPayemnts',
    Board: () => <WeeklyPayemnts />,
    environmentProps: {
        canvasWidth: 362
    }
});
