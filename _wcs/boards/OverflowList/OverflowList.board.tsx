
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { OverflowList } from '../../../src/components/overflow-list/overflow-list';

export default createBoard({
    name: 'OverflowList',
    Board: () => <OverflowList />
});
