import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { WeeklyPaymentw } from '../../../components/weekly-paymentw/weekly-paymentw';

export default createBoard({
    name: 'WeeklyPaymentw',
    Board: () => <WeeklyPaymentw />,
    environmentProps: {
        canvasWidth: 208
    }
});
