import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPayment1 } from '../../../components/weekly-payment-1/weekly-payment-1';

export default createBoard({
    name: 'WeeklyPayment1',
    Board: () => <WeeklyPayment1 />,
    environmentProps: {
        canvasWidth: 410
    }
});
