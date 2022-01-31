
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { Breadcrumbs } from '../../../src/components/breadcrumbs/breadcrumbs';

export default createDemo({
    name: 'Breadcrumbs',
    demo: () => <Breadcrumbs items={[{
        text: '1'
    }, {
        text: '2',
    }, {
        text: '3',
    },]} />
});
