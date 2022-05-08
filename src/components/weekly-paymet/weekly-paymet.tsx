import React from 'react';
import styles from './weekly-paymet.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPaymetProps {
    className?: string;
}

export const WeeklyPaymet: React.FC<WeeklyPaymetProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        <div className={styles.content}>
            <div className={styles.title}>
                WeeklyPaymet</div>
            <div>
                Text</div></div></div>;
};