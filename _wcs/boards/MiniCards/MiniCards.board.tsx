import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MiniCards } from '../../../src/components/mini-cards/mini-cards';

export default createBoard({
    name: 'Example of mini panels',
    Board: () => <MiniCards></MiniCards>,
    environmentProps: {
        canvasWidth: 600,
        windowHeight: 800,
    }
});

