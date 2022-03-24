import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Weeklypay } from '../../../components/weeklypay/weeklypay';

export default createBoard({
    name: 'Weeklypay',
    Board: () => <Weeklypay />,
    environmentProps: {
        canvasWidth: 376
    }
});
