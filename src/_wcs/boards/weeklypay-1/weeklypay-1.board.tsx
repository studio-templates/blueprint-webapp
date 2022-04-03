import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Weeklypay1 } from '../../../components/weeklypay-1/weeklypay-1';

export default createBoard({
    name: 'Weeklypay1',
    Board: () => <Weeklypay1 />,
    environmentProps: {
        canvasWidth: 229
    }
});
