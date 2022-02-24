
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GoalCard } from '../../../components/goal-card/goal-card';

export default createBoard({
    name: 'GoalCard',
    Board: () => <GoalCard date={'12/20/20'} goal={'Holiday'} img="https://www.figma.com/file/pnWPZQpZbdEwyste8YszkO/Room-5?node-id=1%3A229" price={550}></GoalCard>

});
