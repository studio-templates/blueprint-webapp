import React from 'react';
import styles from './goals-group.module.scss'
import { Goals } from '../goals/goals';

export interface GoalsGroupProps {
    className?: string;
}

export const GoalsGroup: React.FC<GoalsGroupProps> = ({ className }) => {
    return <div className={styles.root}>
        <Goals />
        <Goals />
        <Goals /></div>;
};