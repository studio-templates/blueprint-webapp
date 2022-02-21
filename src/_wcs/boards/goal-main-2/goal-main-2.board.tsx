
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GoalMain2 } from '../../../components/goal-main-2/goal-main-2';
import GoalMain2_module_scss from '../../../components/goal-main-2/goal-main-2.module.scss';

export default createBoard({
    name: 'GoalMain2',
    Board: () => <GoalMain2 />
});
