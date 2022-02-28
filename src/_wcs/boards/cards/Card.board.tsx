import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Card',
    Board: () => <Cards />,
    environmentProps: {
        canvasHeight: 364,
        canvasWidth: 597,
        windowWidth: 1024,
        canvasBackgroundColor: '#dadada'
    }
});
