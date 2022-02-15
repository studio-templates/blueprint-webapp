
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Stats } from '../../../components/stats/stats';

export default createBoard({
    name: 'Stats',
    Board: () => <Stats statBars={[{
        iconId: 'cycle',
        percent: 52,
        color: 'orange',
        heading: 'Cycle'

    }, {
        iconId: 'shopping-cart',
        percent: 28,
        color: 'green',
        heading: 'Shopping'
    }, {
        color: 'red',
        heading: 'Travels',
        iconId: 'airplane',
        percent: 74
    }]} />,
    environmentProps: {
        canvasWidth: 513
    }
});
