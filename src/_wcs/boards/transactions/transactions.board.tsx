
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Transactions } from '../../../components/transactions/transactions';

export default createBoard({
    name: 'Transactions',
    Board: () => <Transactions />
});
