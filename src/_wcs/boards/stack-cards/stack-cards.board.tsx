
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { StackCards } from '../../../components/stack-cards/stack-cards';

export default createBoard({
    name: 'StackCards',
    Board: () => <StackCards />
});
