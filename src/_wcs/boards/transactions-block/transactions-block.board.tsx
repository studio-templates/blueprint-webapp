
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { TransactionsBlock } from '../../../components/transactions-block/transactions-block';

export default createBoard({
    name: 'TransactionsBlock',
    Board: () => <TransactionsBlock />,
    environmentProps: {
        canvasWidth: 534
    }
});
