import React from 'react';
import styles from './weekly-payments.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPaymentsProps {
    className?: string;
}

export const WeeklyPayments: React.FC<WeeklyPaymentsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} value={0.3} intent="primary" />
        <div className={styles.footer}>
            <div className={styles.title}>
                WeeklyPayments</div>
            <div>334$ / 4000$</div>
        </div></div>;
};