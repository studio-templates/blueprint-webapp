
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Toast } from '../../../src/components/toast/toast';

export default createBoard({
    name: 'Toast',
    Board: () => <Toast />
});
