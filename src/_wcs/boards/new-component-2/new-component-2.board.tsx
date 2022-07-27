import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NewComponent2 } from '../../../components/new-component-2/new-component-2';

export default createBoard({
    name: 'NewComponent2',
    Board: () => <NewComponent2 />,
    environmentProps: {
        canvasWidth: 235
    }
});
