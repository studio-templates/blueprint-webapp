
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../src/component-templates/component-template/new-component';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent />
});
