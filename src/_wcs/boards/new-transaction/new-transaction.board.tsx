
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NewTransaction } from '../../../components/new-transaction/new-transaction';

export default createBoard({
    name: 'NewTransaction',
    Board: () => <NewTransaction />
});
