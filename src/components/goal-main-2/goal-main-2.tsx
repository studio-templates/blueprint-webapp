import React from 'react';
import styles from './goal-main-2.module.scss'
import { CardGoal } from '../card-goal/card-goal';
import CardGoal_module_scss from '../card-goal/card-goal.module.scss';

export interface GoalMain2Props {
    className?: string;
}

export const GoalMain2: React.FC<GoalMain2Props> = ({ className }) => {
    return <div className={styles.root}>GoalMain2<div className={styles.root}>
        <CardGoal icontype={'mountain'} price={555} subject={'Holiday'} date={'21/02/2022'} className={CardGoal_module_scss.cards}></CardGoal>
        <CardGoal />
    </div>
    </div>;
};