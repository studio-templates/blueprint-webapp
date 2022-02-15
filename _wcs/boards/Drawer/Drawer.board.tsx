
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Drawer } from '../../../src/components/drawer/drawer';

export default createBoard({
    name: 'Drawer',
    Board: () => <Drawer />
});
