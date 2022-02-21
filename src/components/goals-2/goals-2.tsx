import React from 'react';
import { CardGoal } from '../card-goal/card-goal';
import CardGoal_module_scss from '../card-goal/card-goal.module.scss';

export interface Goals2Props {
    className?: string;
}

export const Goals2: React.FC<Goals2Props> = ({ className = '' }) => (
    <div className={className}>
        <div className={CardGoal_module_scss.TopGoal}>
            <CardGoal></CardGoal>
            <CardGoal></CardGoal>
            <CardGoal></CardGoal>
        </div></div>
);