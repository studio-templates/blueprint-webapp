
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GoalCard } from '../../../components/goal-card/goal-card';

export default createBoard({
    name: 'GoalCard',
    Board: () => <GoalCard></GoalCard>

});
