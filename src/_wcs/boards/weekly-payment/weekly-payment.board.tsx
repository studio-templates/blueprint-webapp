import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPayment } from '../../../components/weekly-payment/weekly-payment';

export default createBoard({
    name: 'WeeklyPayment',
    Board: () => <WeeklyPayment />,
    environmentProps: {
        canvasWidth: 281
    }
});
