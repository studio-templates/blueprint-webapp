
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Amount } from '../../../components/amount/amount';

export default createBoard({
    name: 'Amount',
    Board: () => <Amount />
});
