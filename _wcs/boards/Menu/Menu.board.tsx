
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../src/components/menu/menu';
import { MenuItem } from '../../../src/components/menu-item/menu-item';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu>
        <MenuItem text="I am the submenu">
            <MenuItem text="I am the first child!" />
            <MenuItem text="I am the second child!" />
            <MenuItem text="I am the third child!" />
        </MenuItem>
    </Menu>,
});
