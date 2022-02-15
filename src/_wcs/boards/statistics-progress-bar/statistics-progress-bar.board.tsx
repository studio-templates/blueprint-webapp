
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { StatisticsProgressBar } from '../../../components/statistics-progress-bar/statistics-progress-bar';

export default createBoard({
    name: 'StatisticsProgressBar',
    Board: () => <StatisticsProgressBar />,
    environmentProps: {
        canvasWidth: 254
    }
});
