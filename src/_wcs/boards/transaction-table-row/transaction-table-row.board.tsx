
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { TransactionTableRow } from '../../../components/transaction-table-row/transaction-table-row';

export default createBoard({
    name: 'TransactionTableRow',
    Board: () => <TransactionTableRow></TransactionTableRow>
});
