
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { MenuItem } from '../../../src/components/menu-item/menu-item';

export default createDemo({
    name: 'MenuItem',
    demo: () => <MenuItem icon="emoji" text={'I am the Text!'} />
});
