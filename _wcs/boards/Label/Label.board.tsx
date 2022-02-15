
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Label } from '../../../src/components/label/label';

export default createBoard({
    name: 'Label',
    Board: () => <Label />
});
