
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { CircleIconButton } from '../../../src/components/circle-icon-button/circle-icon-button';

export default createBoard({
    name: 'CircleIconButton',
    Board: () => <CircleIconButton icon="heart" />
});
