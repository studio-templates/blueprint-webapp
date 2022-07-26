import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklySummary } from '../../../components/weekly-summary/weekly-summary';

export default createBoard({
    name: 'WeeklySummary',
    Board: () => <WeeklySummary />,
    environmentProps: {
        canvasWidth: 428
    }
});
