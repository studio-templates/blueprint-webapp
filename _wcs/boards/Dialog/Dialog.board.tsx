
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../src/components/dialog/dialog';

export default createBoard({
    name: 'Dialog',
    Board: () => <Dialog />
});
