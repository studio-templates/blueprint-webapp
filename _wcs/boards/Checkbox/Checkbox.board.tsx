
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Checkbox } from '../../../src/components/checkbox/checkbox';

export default createBoard({
    name: 'Checkbox',
    Board: () => <Checkbox checked />
});
