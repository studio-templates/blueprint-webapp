
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { HTMLSelect } from '../../../src/components/control-group/control-group';

export default createBoard({
    name: 'HTMLSelect',
    Board: () => <HTMLSelect />
});
