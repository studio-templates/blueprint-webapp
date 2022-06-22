import React from 'react';
import styles from './weekly-payemnts.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPayemntsProps {
    className?: string;
}

export const WeeklyPayemnts: React.FC<WeeklyPayemntsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        <div className={styles.title}>
            WeeklyPayemnts</div></div>;
};