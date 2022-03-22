import React from 'react';
import styles from './weekly-payment.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPaymentProps {
    className?: string;
}

export const WeeklyPayment: React.FC<WeeklyPaymentProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} value={0.3} intent="primary" />
        <div className={styles.footer}>
            <div className={styles.title}>
                WeeklyPayment</div>
            <div>334$ / 400$</div>
        </div></div>;
};