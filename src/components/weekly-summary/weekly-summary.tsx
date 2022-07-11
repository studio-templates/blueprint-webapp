import React from 'react';
import styles from './weekly-summary.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklySummaryProps {
    className?: string;
}

export const WeeklySummary: React.FC<WeeklySummaryProps> = ({ className }) => {
    return <div className={styles.root}>
        <div>
            <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        </div>WeeklySummary</div>;
};