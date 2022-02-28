import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Statistics } from '../../../components/statistics/statistics';

export default createBoard({
    name: 'Current Balance',
    Board: () => <Statistics price={2850.75} type="balance" />
});
