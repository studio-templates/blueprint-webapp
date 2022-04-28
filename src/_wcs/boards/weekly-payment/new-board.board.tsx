import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPayment } from '../../../components/weekly-payment/weekly-payment';

export default createBoard({
    name: 'New Board',
    Board: () => <WeeklyPayment />,
    environmentProps: {
        canvasWidth: 297
    }
});
