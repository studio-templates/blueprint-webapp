import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPayments } from '../../../components/weekly-payments/weekly-payments';

export default createBoard({
    name: 'WeeklyPayments',
    Board: () => <WeeklyPayments />,
    environmentProps: {
        windowWidth: 910,
        windowHeight: 488,
        canvasWidth: 292
    }
});
