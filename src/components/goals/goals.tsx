import React from 'react';
import styles from './goals.module.scss'
import { GoalCardProps, GoalCard } from "../goal-card/goal-card"
import GoalCard_module_scss from '../goal-card/goal-card.module.scss';
import { Icon } from '../icon/Icon';

export interface GoalsProps {
    className?: string;
    goals: GoalCardProps[]
}

export const Goals: React.FC<GoalsProps> = ({ className, goals }) => {
    return <div>
        <div className={GoalCard_module_scss.header}>Goals<div className={GoalCard_module_scss.AddIcon}>
            <Icon icon="add" size={24}></Icon>
        </div></div>
        <div className={GoalCard_module_scss.Gallery}>
            <div className={`${styles.root} ${GoalCard_module_scss.Cards}`}>
                {goals.map((goal) => (<GoalCard {...goal} />))}</div>
            <Icon icon="chevron-right" size={19} color={'#197BBD'} />
        </div></div>;


};