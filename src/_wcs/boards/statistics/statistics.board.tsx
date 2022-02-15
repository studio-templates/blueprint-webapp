
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Statistics } from '../../../components/statistics/statistics';

export default createBoard({
    name: 'Statistics',
    Board: () => <Statistics
        value={.52}
        title="Shopping"
    />,
    environmentProps: {
        canvasWidth: 274,
    }
});
