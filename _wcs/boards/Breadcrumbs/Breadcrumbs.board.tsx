
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Breadcrumbs } from '../../../src/components/breadcrumbs/breadcrumbs';

export default createBoard({
    name: 'Breadcrumbs',
    Board: () => <Breadcrumbs items={[{
        text: '1'
    }, {
        text: '2',
    }, {
        text: '3',
    }, {
        text: '4',
    },]} />
});
