
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GoalsGroup } from '../../../components/goals-group/goals-group';

export default createBoard({
    name: 'GoalsGroup',
    Board: () => <GoalsGroup />
});
