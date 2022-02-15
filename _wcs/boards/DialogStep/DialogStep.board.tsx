
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { DialogStep } from '../../../src/components/dialog-step/dialog-step';

export default createBoard({
    name: 'DialogStep',
    Board: () => <DialogStep />
});
