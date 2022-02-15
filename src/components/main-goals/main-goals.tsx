import React from 'react';
import styles from './main-goals.module.scss'
import { Goals } from '../goals/goals';

export interface MainGoalsProps {
    className?: string;
}

export const MainGoals: React.FC<MainGoalsProps> = ({ className }) => {
    return <div className={styles.root}>
        <div>
            MainGoals</div>
        <Goals goals={[]} />
    </div>;
};