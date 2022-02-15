
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Alert } from '../../../src/components/alert/alert';

export default createBoard({
    name: 'Alert',
    Board: () => <Alert />
});
