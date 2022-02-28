
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { PageHeader } from './../../../src/components/page-header/page-header';

export default createBoard({
    name: 'PageHeader',
    Board: () => <PageHeader />,
    environmentProps: {
        canvasWidth: 1069
    }
});
