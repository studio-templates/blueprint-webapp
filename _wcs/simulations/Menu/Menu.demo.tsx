
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { Menu } from '../../../src/components/menu/menu';
import { MenuItem } from '../../../src/components/menu-item/menu-item';

export default createDemo({
    name: 'Menu',
    demo: () => <Menu>
        <MenuItem text="I am the submenu">
            <MenuItem text="I am the first child!" />
            <MenuItem text="I am the second child!" />
            <MenuItem text="I am the third child!" />
        </MenuItem>
    </Menu>,
});
