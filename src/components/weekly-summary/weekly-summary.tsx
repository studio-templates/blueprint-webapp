import React from 'react';
import styles from './weekly-summary.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklySummaryProps {
    className?: string;
}

export const WeeklySummary: React.FC<WeeklySummaryProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        <div className={styles.footer}>
            <div>
                WeeklyPayment Limit</div>
            <div>$350/$1000</div>
        </div></div>;
};