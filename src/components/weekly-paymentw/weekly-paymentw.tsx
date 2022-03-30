import React from 'react';
import styles from './weekly-paymentw.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPaymentwProps {
    className?: string;
}

export const WeeklyPaymentw: React.FC<WeeklyPaymentwProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} intent="primary" value={0.3}></ProgressBar>
        <div className={styles.content}>
            <div className={styles.title}>Weekly Payments </div>
            <div>
                Text</div></div></div>;
};