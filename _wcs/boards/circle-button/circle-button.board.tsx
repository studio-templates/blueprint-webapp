
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { CircleButton } from '../../../src/components/circle-button/circle-button';

export default createBoard({
    name: 'CircleButton',
    Board: () => <CircleButton>a</CircleButton>
});
