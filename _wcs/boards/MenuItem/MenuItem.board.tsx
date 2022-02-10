
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MenuItem } from '../../../src/components/menu-item/menu-item';

export default createBoard({
    name: 'MenuItem',
    Board: () => <MenuItem icon="emoji" text={'I am the Text!'} />
});
