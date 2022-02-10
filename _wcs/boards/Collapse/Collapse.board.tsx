
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Collapse } from '../../../src/components/collapse/collapse';

export default createBoard({
    name: 'Collapse',
    Board: () => <Collapse isOpen>"I Am a Collapse"</Collapse >
});
