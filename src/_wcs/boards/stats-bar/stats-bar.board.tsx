
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { StatsBar } from '../../../components/stats-bar/stats-bar';

export default createBoard({
    name: 'StatsBar',
    Board: () => <StatsBar color='orange' iconId='cycle' percent={20} heading={'Some heading'} />,
    environmentProps: {
        canvasWidth: 372
    }
});
