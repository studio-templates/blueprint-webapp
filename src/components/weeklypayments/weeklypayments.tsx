import React from 'react';
import styles from './weeklypayments.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklypaymentsProps {
    className?: string;
}

export const Weeklypayments: React.FC<WeeklypaymentsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} value={0.3} intent="primary" />
        <div className={styles.footer}>
            <div className={styles.title}>
                Weeklypayments</div>
            <div>334$ / 400$</div>
        </div></div>;
};