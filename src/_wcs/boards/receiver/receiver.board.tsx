
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Receiver } from '../../../components/receiver/receiver';
import { IconContainer } from '../../../components/icon-container/icon-container';

export default createBoard({
    name: 'Receiver',
    Board: () => <Receiver className="transaction-cell"></Receiver>,
    environmentProps: {}
});
