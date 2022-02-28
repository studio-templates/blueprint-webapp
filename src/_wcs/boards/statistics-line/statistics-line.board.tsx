
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { StatisticsLine } from '../../../components/statistics-line/statistics-line';

export default createBoard({
    name: 'StatisticsLine',
    Board: () => <StatisticsLine />,
    environmentProps: {
        windowHeight: 640
    }
});
