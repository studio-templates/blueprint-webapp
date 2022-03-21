import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPayments } from '../../../components/weekly-payments/weekly-payments';

export default createBoard({
    name: 'WeeklyPayments',
    Board: () => <WeeklyPayments />,
    environmentProps: {
        canvasWidth: 256
    }
});
