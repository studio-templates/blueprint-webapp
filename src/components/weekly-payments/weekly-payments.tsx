import React from 'react';
import styles from './weekly-payments.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPaymentsProps {
    className?: string;
}

export const WeeklyPayments: React.FC<WeeklyPaymentsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        <div className={styles.title}>
            WeeklyPayments</div></div>;
};