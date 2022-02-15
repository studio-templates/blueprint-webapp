
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { OutcomeStatistics } from '../../../components/outcome-statistics/outcome-statistics';

export default createBoard({
    name: 'OutcomeStatistics',
    Board: () => <OutcomeStatistics />
});
