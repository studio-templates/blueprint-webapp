import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Weeklypayment } from '../../../components/weeklypayment/weeklypayment';

export default createBoard({
    name: 'Weeklypayment',
    Board: () => <Weeklypayment />,
    environmentProps: {
        canvasWidth: 269
    }
});
