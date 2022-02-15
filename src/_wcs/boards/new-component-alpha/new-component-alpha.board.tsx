
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NewComponentAlpha } from '../../../components/new-component-alpha/new-component-alpha';

export default createBoard({
    name: 'NewComponentAlpha',
    Board: () => <NewComponentAlpha />,
    environmentProps: {
        canvasWidth: 187
    }
});
