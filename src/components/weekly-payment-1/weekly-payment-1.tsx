import React from 'react';
import styles from './weekly-payment-1.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPayment1Props {
    className?: string;
}

export const WeeklyPayment1: React.FC<WeeklyPayment1Props> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} value={0.3} intent="primary" />
        <div className={styles.footer}>
            <div className={styles.title}>
                WeeklyPayment1</div>
            <div>334$ / 400$</div>
        </div></div>;
};