
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MainGoals } from '../../../components/main-goals/main-goals';

export default createBoard({
    name: 'MainGoals',
    Board: () => <MainGoals />
});
