import React from 'react';
import styles from './weekly-payment.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPaymentProps {
    className?: string;
}

export const WeeklyPayment: React.FC<WeeklyPaymentProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} intent="primary" value={0.3} />
        <div className={styles.title}>
            WeeklyPayment</div></div>;
};