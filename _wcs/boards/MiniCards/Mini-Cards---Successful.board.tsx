import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MiniCards } from '../../../src/components/mini-cards/mini-cards';

export default createBoard({
    name: 'Mini Cards - Successful ',
    Board: () => <MiniCards intent='success' />,
    environmentProps: {
        canvasWidth: 600,
        windowHeight: 800,
    }
});
