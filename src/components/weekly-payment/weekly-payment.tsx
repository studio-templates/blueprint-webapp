import React from 'react';
import styles from './weekly-payment.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPaymentProps {
    className?: string;
}

export const WeeklyPayment: React.FC<WeeklyPaymentProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        <div className={styles.footer}>
            <div className={styles.title}>
                WeeklyPayment</div>
            <div>
                Text</div></div></div>;
};