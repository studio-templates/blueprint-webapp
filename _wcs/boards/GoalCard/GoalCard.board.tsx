
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Icon } from '../../../src/components/icon/Icon';
import { GoalCard } from '../../../src/components/goal-card/goal-card';

export default createBoard({
    name: 'GoalCard',
    Board: () => (
        <GoalCard 
            price={550} 
            date={'08/03/2022'} 
            icon={<Icon icon="mountain" iconSize={32} color="#7CB4F9" />} 
            category="Holidays" 
        />)
});
