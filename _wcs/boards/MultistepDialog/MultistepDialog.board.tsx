
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MultistepDialog } from '../../../src/components/muiltistep-dialog/muiltistep-dialog';

export default createBoard({
    name: 'MultistepDialog',
    Board: () => <MultistepDialog />
});
