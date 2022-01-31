
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { Collapse } from '../../../src/components/collapse/collapse';

export default createDemo({
    name: 'Collapse',
    demo: () => <Collapse isOpen>"I Am a Collapse"</Collapse >
});
