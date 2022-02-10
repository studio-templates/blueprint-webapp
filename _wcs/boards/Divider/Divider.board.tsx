
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Divider } from '../../../src/components/divider/divider';

export default createBoard({
    name: 'Divider',
    Board: () => <Divider key="div" />
});
