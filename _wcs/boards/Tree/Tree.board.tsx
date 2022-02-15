
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Tree } from '../../../src/components/tree/tree';

export default createBoard({
    name: 'Tree',
    Board: () => <Tree />
});
